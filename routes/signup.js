var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');
var bcrypt = require('bcryptjs')

//router mounted at localhost:3000/signup
router.post('/', function(req,res,next){
  knex('students').select().where(
    'uname', req.body.uname
  ).first().then((student)=>{
    if(student){
      console.log('you already have an account with us');
      res.redirect('/try/again/please/')
    } else {
      bcrypt.hash(req.body.pword,10)
        .then((hash) => {
          var student = req.body;
          student.pword = hash
          console.log(hash);
          knex('students').insert({
            uname: student.uname,
            pword: student.pword,
            fname: student.fname,
            lname: student.lname,
            email: student.email
          }).then(function(){
            knex('students').where(
              'uname', student.uname
            ).first().then(function(student){
              res.redirect('/profile/student/' + student.uname)
            })
          })
        })
    }
  })
})




router.post('/teacher', function(req, res, next){
  var teacher = req.body;
  knex('teachers').insert({
    uname: teacher.uname,
    pword: teacher.pword,
    fname: teacher.fname,
    lname: teacher.lname,
    email: teacher.email
  })
  .then(()=>{
    res.redirect('/profile/teacher/' + teacher.uname)
  })
})


module.exports = router;
