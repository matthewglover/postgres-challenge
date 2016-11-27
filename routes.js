
const users = [
  { firstName: 'Matt', lastName: 'Glover', age: 25, type: 'worker' },
  { firstName: 'Sam', lastName: 'Galson', age: 30, type: 'professor' },
  { firstName: 'Matt', lastName: 'Sharp', age: 24, type: 'hipster' },
  { firstName: 'Rich', lastName: 'Warren', age: 22, type: 'boss' },
];

const home = {
  method: 'GET',
  path: '/',
  handler(req, reply) {
    reply.view('users', { users });
  },
};

module.exports = [
  home,
];
