const knex = require('knex');

function showProfile(uname) {
  return knex('students').select().where('uname', uname)
}

module.exports = {
  showProfile
}
