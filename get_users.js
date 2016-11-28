const dbConn = require('./db_connection');

module.exports = cb =>
  dbConn.query('SELECT * from users;', (error, data) =>
    (error
      ? cb(error)
      : cb(null, data.rows)));
