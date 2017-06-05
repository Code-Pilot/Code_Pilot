var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Auth Page' });
});

router.get('/teacher-signup', function(req, res, next) {
  res.render('teacher-signup', { title: 'Auth Page' });
});
router.get('/student-signup', function(req, res, next) {
  res.render('student-signup', { title: 'Auth Page' });
});
router.get('/teacher-login', function(req, res, next) {
  res.render('teacher-login', { title: 'Auth Page' });
});
router.get('/student-login', function(req, res, next) {
  res.render('student-login', { title: 'Auth Page' });
});
module.exports = router;
