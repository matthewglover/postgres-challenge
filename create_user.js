const dbConn = require('./db_connection');

module.exports = (data, cb) => {
  const query = 'INSERT INTO users ("firstName", "lastName", age, type) VALUES ($1, $2, $3, $4);';

  dbConn.query(query, [data.firstName, data.lastName, data.age, data.type], (error, data) => {
    error ? cb(error) : cb(null, data.rows);
  });
};
