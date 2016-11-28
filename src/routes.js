require('./init_database');
const sql = require('./user_query');

const home = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    sql.getUsers((error, users) => {
      if (error) console.log('Error:', error);
      reply.view('users', { users });
    });
  },
};

const create = {
  method: 'POST',
  path: '/createuser',
  handler(req, reply) {
    sql.createUser(req.payload, (error) => {
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
    sql.getUser(userid, (error, user) => {
      if (error) console.log(error);
      reply.view('edituser', user);
    });
  },
};

const update = {
  method: 'POST',
  path: '/updateuser',
  handler(req, reply) {
    sql.updateUser(req.payload, (error) => {
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
    sql.deleteUser(userid, (error) => {
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
