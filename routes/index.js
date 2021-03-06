var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const num = Math.floor((Math.random() * 5) + 1);
  const titles = [{
    title: "Code_Pilot",
    subtitle: "Pair Programming for Now"
  },
  {
    title: "Code_Pilot",
    subtitle: "Pair My Programming"
  },
  {
    title: "Code_Pilot",
    subtitle: "Never Program Alone"
  },
  {
    title: "Code_Pilot",
    subtitle: "Achieve Better"
  },
  {
    title: "Code_Pilot",
    subtitle: "Code With Authority"
  },
  {
    title: "Code_Pilot",
    subtitle: "When the Debugging Gets Tough"
  }
]
  res.render('index', titles[(num)]);
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

router.get('/try/again/please/', (req,res) => {
  res.render('oops' , {message: 'That account already exist.'}) // hbs here
})
router.get('/try/teach/please/', (req,res) => {
  res.render('oops' , {message: 'That account already exist.'})
})
router.get('/no/can/do/', (req,res) => {
  res.render('oops' , {message: 'Incorrect Password'})
})
router.get('/invalid/creds/', (req,res) => {
  res.render('oops' , {message: 'Invalid Username or Password'})
})


module.exports = router;
