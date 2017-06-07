
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(() => {
      const students = [{
        uname: 'wasabiPeas',
        pword: 'password',
        fname: 'Asian',
        lname: 'Pride',
        email: 'bish@gmail.com',
        bio: 'I am a major wasabiPea',
        userType: 'student',
        stack: 'Front End',
        lang1: 'Javascript',
        lang2: 'HTML',
        langToKnow1: 'C++',
        langToKnow2: 'React Native',
        isOnline: false
      }]
      return knex('students').insert(students)
    });
};
