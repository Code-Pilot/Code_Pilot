
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('teachers').del()
    .then(() => {
      const teachers = [{
        uname: 'bitchFace',
        pword: 'password',
        fname: 'Coulter',
        lname: 'Freyre',
        email: 'ish@gmail.com',
        userType: 'teacher',
        bio: 'I am a major bitchFace',
        skills: 'I have limited skills',
        lang1: 'Javascript',
        lang2: 'Angular',
        lang3: 'React'
      }]
      return knex('teachers').insert(teachers)
    });
};
