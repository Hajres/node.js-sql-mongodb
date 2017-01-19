const bcrypt = require("bcrypt-nodejs")
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('users').insert({id: 1, email: 'swayah@test.com', password: bcrypt.hashSync("123456")}),
        knex('users').insert({id: 2, email: 'Malik@test.com', password: bcrypt.hashSync("1234")}),
        knex('users').insert({id: 3, email: 'khalid@test.com', password: bcrypt.hashSync("1234")})
      ]);
    });
};
