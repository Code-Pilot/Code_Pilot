var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');

//router mounted at localhost:3000/profile
router.get('/student/:uname', function(req, res, next) {
  const uname = req.params.uname
  linkQuery.showProfile(uname)
  .then((data) => {
    console.log(data)
    res.render('student-profile', {uname:data[0]} );
  })
});

module.exports = router
