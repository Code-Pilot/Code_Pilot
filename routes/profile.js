var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');

//router mounted at localhost:3000/profile

router.get('/student/:uname', (req, res) =>{
  var user = req.params.uname
  knex('students').select().where('uname', user).then((data) => {
    res.render('student-profile', {user: data[0]})
  })
})

router.post('/', function(req, res, next) {
  const user = req.body;
  knex('students').select().where('uname', user.uname)
  .then((data) => {
      res.redirect('profile/student/'+ user.uname);
    })
});

// router.post('/', (req, res) =>{
//   var user = req.body;
//   pg('personal').select().where('user_name', user.user_name).then((info) => {
//     console.log(info[0].id);
//     bcrypt.compare(user.password, info[0].password).then((pass) => {
//       if (pass) {
//           res.redirect('/profile/' + user.user_name);
//       }else{
//
//       }
//     })
//   });
// });

module.exports = router;
