var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');
var bcrypt = require('bcryptjs')
var cookieSession = require('cookie-session')
var key = process.env.COOKIE_KEY || 'asdfasdf'
//router mounted at localhost:3000/profile

router.get('/student/:uname', (req, res) =>{
  var student = req.params.uname
  knex('students').select().where('uname', student).then((data) => {
    res.render('student-profile', {student: data[0]})
  })
})


router.get('/student/pair-programming/', (req,res) => {
  var onlineTeachers = knex('teachers').select().where('isOnline', true).then((data)=>{
    res.render('online-teachers', onlineTeachers)
  })
})

// app.post('/profile', (req, res) => {
//   linkQuery.seeIfUserExists().where({
//     email: req.body.email
//   }).first()
//         .then(function (user) {
//           if (user) {
//             bcrypt.compare(req.body.password, user.password).then(function (data) {
//               if (data) {
//                 req.session.id = user.id
//                 res.redirect('/profile/' + user.id)
//               } else {
//                 res.send('incorrect password')
//               }
//             })
//           } else {
//             res.send('invalid login')
//           }
//         })
// })
//honey backpack
router.post('/', function(req, res, next) {
  knex('students').select().where({
    uname: req.body.uname
  }).first()
  .then(function(user){
    console.log(user);
    if(user){
      bcrypt.compare(
        req.body.pword, user.pword
      ).then(function(data){
        console.log(user.pword);
        console.log('HELLOHELLO' , user.uname);
        console.log(data);
        console.log('USERUSERUSER' , user.id);
        if(data){
          req.session.id = user.id
          res.redirect('/profile/student/' + user.uname)
        } else {
          res.send('incorrect password')
        }
      })
    } else {
      res.send('invalid login')
    }
  })





  // const student = req.body;
  // knex('students').select().where('uname', student.uname)
  // .then((data) => {
  //     res.redirect('profile/student/'+ student.uname);
  //   })
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
        'skills': teacher.skills,
        'lang1': teacher.lang1,
        'lang2': teacher.lang2,
        'lang3': teacher.lang3
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

router.post('/online/', (req,res) => {
  var uname = req.body.uname
  teacher = req.body
  // var isOnline = req.body.isOnline
  linkQuery.goOnline(req.body, uname)
  .then(data => {
      res.redirect('/profile/teacher/'+ teacher.uname)
  })
})

router.post('/offline/', (req,res) => {
  var uname = req.body.uname
  teacher = req.body
  // var isOnline = req.body.isOnline
  linkQuery.goOffline(req.body, uname)
  .then(data => {
      res.redirect('/profile/teacher/'+ teacher.uname)
  })
})


module.exports = router;
