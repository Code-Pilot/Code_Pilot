var knex = require('./knex')

function deleteStudent(uname) {
  return knex('students').where(
  'uname', uname).del()
}

function deleteTeacher(uname) {
  return knex('teachers').where(
  'uname', uname).del()
}

module.exports = {
  deleteStudent,
  deleteTeacher
}
