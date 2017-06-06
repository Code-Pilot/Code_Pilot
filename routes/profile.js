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
        'pword': student.pword,
        'fname': student.fname,
        'lname': student.lname,
        'email': student.email,
        'bio': student.bio,
        'priorKnowledge': student.priorKnowledge,
        'toKnow': student.toKnow
  })
  .then((data)=>{
    console.log('stuffffff');
    res.redirect('/profile/student/' + student.uname)
  })
})

router.get('/student/delete/', function(req,res,next) {
  linkQuery.deleteStudent(req.params.id).then(() => {
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
