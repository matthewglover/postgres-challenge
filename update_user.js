const dbConn = require('./db_connection');

module.exports = (user, cb) => {
  console.log(user);
  dbConn.query('UPDATE users SET "firstName"=$1, "lastName"=$2, age=$3, type=$4 WHERE id = $5;', [user.firstName, user.lastName, user.age, user.type, user.id], (error, result) => {
    error ? cb(error) : cb(null, result);
  });
};
