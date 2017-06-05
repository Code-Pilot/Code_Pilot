var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');


//router mounted at localhost:3000/signup
router.post('/', function(req,res,next){
  var user = req.body;
  knex('students').insert({
    uname: user.uname,
    pword: user.pword,
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    bio:'',
    priorKnowledge: '',
    toKnow: ''
  })
  .then(()=>{
    res.redirect('/profile/student/' + user.uname)
  })
})


module.exports = router;
