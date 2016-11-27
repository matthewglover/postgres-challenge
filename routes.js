
const users = [
  { firstName: 'Matt', lastName: 'Glover', age: 25 },
  { firstName: 'Sam', lastName: 'Galson', age: 30 },
  { firstName: 'Matt', lastName: 'Sharp', age: 24 },
  { firstName: 'Rich', lastName: 'Warren', age: 22 },
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
