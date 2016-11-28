require('./init_database');
const getUsers = require('./get_users');
const createUser = require('./create_user');

// const users = [
//   { firstName: 'Matt', lastName: 'Glover', age: 25, type: 'worker' },
//   { firstName: 'Sam', lastName: 'Galson', age: 30, type: 'professor' },
//   { firstName: 'Matt', lastName: 'Sharp', age: 24, type: 'hipster' },
//   { firstName: 'Rich', lastName: 'Warren', age: 22, type: 'boss' },
// ];

const home = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    getUsers((error, users) => {
      if (error) console.log('Error:', error);
      console.log(users);
      reply.view('users', { users });
    });
  },
};

const create = {
  method: 'POST',
  path: '/createuser',
  handler(req, reply) {
    console.log(req.params);
    createUser(req.params, (error, users) => {
      if (error) console.log('Error:', error);
      console.log(users);
      reply.view('users', { users });
    });
  },
};


module.exports = [
  home,
  create,
];
