var knex = require('./knex')

function deleteStudent(id) {
  return knex('students').where(
  'id', id).del()
}


module.exports = {
  deleteStudent
}
