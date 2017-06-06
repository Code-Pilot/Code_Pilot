var knex = require('./knex')

function deleteStudent(pooppoop) {
  return knex('students').where(
  'uname', pooppoop).del()
}


module.exports = {
  deleteStudent
}
