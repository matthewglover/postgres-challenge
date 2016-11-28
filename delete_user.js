const dbConn = require('./db_connection');

module.exports = (id, cb) => {
  dbConn.query('DELETE FROM users WHERE id = $1;', [id], (error, data) => {
    error ? cb(error) : cb(null, data.rows[0]);
  });
};
