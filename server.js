const env = require('env2');
const {
  createServer,
  setConnection,
  registerPlugins,
  addRoutes,
  startServer } = require('@matthewglover/hapi-wrapper');

env('./local.env');

const routes = require('./routes');
const plugins = require('./plugins');
const configureHandlebars = require('./configure_handlebars');

const port = process.env.PORT || 4000;

createServer()
  .then(setConnection({ port }))
  .then(registerPlugins(plugins))
  .then(configureHandlebars)
  .then(addRoutes(routes))
  .then(startServer)
  .then(server => console.log(`Server running at: ${server.info.uri}`))
  .catch(error => console.log(error));
