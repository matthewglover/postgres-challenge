const handlebars = require('handlebars');

module.exports = (server) => {
  server.views({
    engines: { html: handlebars },
    relativeTo: __dirname,
    path: './views',
    layout: 'default',
    layoutPath: './views/layout',
    partialsPath: './views/partials',
    helpersPath: './views/helpers',
  });

  return server;
};
