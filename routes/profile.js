var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');

//router mounted at localhost:3000/profile

router.get('/student/:uname', (req, res) =>{
  var student = req.params.uname
  knex('students').select().where('uname', student).then((data) => {
    res.render('student-profile', {student: data[0]})
  })
})

router.post('/', function(req, res, next) {
  const student = req.body;
  knex('students').select().where('uname', student.uname)
  .then((data) => {
      res.redirect('profile/student/'+ student.uname);
    })
});


router.get('/teacher/:uname', (req, res) =>{
  var teacher = req.params.uname
  knex('teachers').select().where('uname', teacher).then((data) => {
    res.render('teacher-profile', {teacher: data[0]})
  })
})

router.post('/teacher', function(req, res, next) {
  console.log('mehhhh');
  const teacher = req.body;
  knex('teachers').select().where('uname', teacher.uname)
  .then((data) => {
      res.redirect('/profile/teacher/'+ teacher.uname);
    })
});

module.exports = router;
