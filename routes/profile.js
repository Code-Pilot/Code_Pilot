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

router.get('/student/:uname/edit', function(req, res, next) {
    var student = req.params.uname
  knex('students').select().where('uname', student).then((data) => {
    res.render('student-profile-edit', {student: data[0]})
  })
})

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

router.post('/student/edited/', function(req, res, next){
  var student = req.body;
  knex('students').where('id', student.id).update({
        'uname': student.uname,
        // 'pword': student.pword,
        'fname': student.fname,
        'lname': student.lname,
        'email': student.email,
        'bio': student.bio,
        'userType': student.userType,
        'stack': student.stack,
        'lang1': student.lang1,
        'lang2': student.lang2,
        'langToKnow1': student.langToKnow1,
        'langToKnow2': student.langToKnow2
  })
  .then((data)=>{
    console.log('stuffffff');
    res.redirect('/profile/student/' + student.uname)
  })
})

router.get('/student/:uname/delete/', function(req,res,next) {
  linkQuery.deleteStudent(req.params.uname).then(() => {
    res.redirect('/')
  })
})

router.post('/teacher/edited/', function(req, res, next){
  var teacher = req.body;
  knex('teachers').where('id', teacher.id).update({
        'uname': teacher.uname,
        'pword': teacher.pword,
        'fname': teacher.fname,
        'lname': teacher.lname,
        'email': teacher.email,
        'bio': teacher.bio,
        'skills': teacher.skills
  })
  .then((data)=>{
    console.log('new teach');
    res.redirect('/profile/teacher/' + teacher.uname)
  })
})

router.get('/teacher/:uname/edit', function(req, res, next) {
    var teacher = req.params.uname
  knex('teachers').select().where('uname', teacher).then((data) => {
    res.render('teacher-profile-edit', {teacher: data[0]})
  })
})

router.get('/teacher/:uname/delete/', function(req,res,next) {
  linkQuery.deleteTeacher(req.params.uname).then(() => {
    res.redirect('/')
  })
})

// pg('ideas').where('id', id).update({
//     'title': body.title,
//     'description': body.description,
//     'excitement': body.excitement,
//     'difficulty': body.difficulty,
//     'notes': body.notes,
//     'defFeatures': body.defFeatures,
//     'posFeatures': body.posFeatures,
//     'market': body.market,
//     'valueAdd': body.valueAdd,
//     'competition': body.competition,
//     'compImprove': body.compImprove,
//     'techUsed': body.techUsed,
//     'challenges': body.challenges,
//     'resources': body.resources,
//     'purpose': body.purpose,
//     'research': body.research,
//     'links': body.links,
//     'stage': body.stage,

module.exports = router;
