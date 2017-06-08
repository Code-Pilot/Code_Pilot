var knex = require('./knex')

function deleteStudent(uname) {
  return knex('students').where(
  'uname', uname).del()
}

function deleteTeacher(uname) {
  return knex('teachers').where(
  'uname', uname).del()
}

function goOnline(body, uname){
  return knex('teachers').where('uname', uname).update({
    'isOnline': true
  })
}

function goOffline(body, uname){
  return knex('teachers').where('uname', uname).update({
    'isOnline': false
  })
}


module.exports = {
  deleteStudent,
  deleteTeacher,
  goOnline,
  goOffline
}
