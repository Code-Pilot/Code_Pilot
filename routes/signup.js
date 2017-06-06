var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');


//router mounted at localhost:3000/signup
router.post('/', function(req,res,next){
  var student = req.body;
  knex('students').insert({
    uname: student.uname,
    pword: student.pword,
    fname: student.fname,
    lname: student.lname,
    email: student.email,
    bio:'',
    priorKnowledge: '',
    toKnow: ''
  })
  .then(()=>{
    res.redirect('/profile/student/' + student.uname)
  })
})

router.post('/teacher', function(req, res, next){
  var teacher = req.body;
  knex('teachers').insert({
    uname: teacher.uname,
    pword: teacher.pword,
    fname: teacher.fname,
    lname: teacher.lname,
    email: teacher.email,
    bio:'',
    skills: ''
  })
  .then(()=>{
    res.redirect('/profile/teacher/' + teacher.uname)
  })
})


module.exports = router;
