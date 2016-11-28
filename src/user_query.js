const dbConn = require('./db_connection');

const getUser = (id, cb) => {
  dbConn.query('SELECT * from users WHERE id = $1;', [id], (error, data) => {
    error ? cb(error) : cb(null, data.rows[0]);
  });
};

const getUsers = cb =>
  dbConn.query('SELECT * from users;', (error, data) =>
    (error
      ? cb(error)
      : cb(null, data.rows)));

const deleteUser = (id, cb) => {
  dbConn.query('DELETE FROM users WHERE id = $1;', [id], (error, data) => {
    error ? cb(error) : cb(null, data.rows[0]);
  });
};

const createUser = (data, cb) => {
  const query = 'INSERT INTO users ("firstName", "lastName", age, type) VALUES ($1, $2, $3, $4);';
  dbConn.query(query, [data.firstName, data.lastName, data.age, data.type], (error, data) => {
    error ? cb(error) : cb(null, data.rows);
  });
};

const updateUser = (user, cb) => {
  dbConn.query('UPDATE users SET "firstName"=$1, "lastName"=$2, age=$3, type=$4 WHERE id = $5;', [user.firstName, user.lastName, user.age, user.type, user.id], (error, result) => {
    error ? cb(error) : cb(null, result);
  });
};


module.exports = {
  getUser,
  getUsers,
  deleteUser,
  createUser,
  updateUser,
};
