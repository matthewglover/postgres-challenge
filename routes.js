require('./init_database');
const getUsers = require('./get_users');
const getUser = require('./get_user');
const createUser = require('./create_user');
const updateUser = require('./update_user');
const deleteUser = require('./delete_user');

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
      reply.view('users', { users });
    });
  },
};

const create = {
  method: 'POST',
  path: '/createuser',
  handler(req, reply) {
    createUser(req.payload, (error) => {
      if (error) console.log('Error:', error);
      reply.redirect('/');
    });
  },
};

const edit = {
  method: 'GET',
  path: '/edituser',
  handler(req, reply) {
    const userid = req.query.id;
    getUser(userid, (error, user) => {
      if (error) console.log(error);
      reply.view('edituser', user);
    });
  },
};

const update = {
  method: 'POST',
  path: '/updateuser',
  handler(req, reply) {
    updateUser(req.payload, (error) => {
      if (error) console.log(error);
      reply.redirect('/');
    });
  },
};

const del = {
  method: 'GET',
  path: '/deleteuser',
  handler(req, reply) {
    const userid = req.query.id;
    deleteUser(userid, (error) => {
      if (error) console.log(error);
      reply.redirect('/');
    });
  },
};

module.exports = [
  home,
  create,
  edit,
  update,
  del,
];
