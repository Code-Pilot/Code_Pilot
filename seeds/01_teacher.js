
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
        bio: 'I am a major bitchFace',
        skills: 'I have limited skills'
      }]
      return knex('teachers').insert(teachers)
    });
};
