
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
        priorKnowledge: 'I have lots of wasabi Peas',
        toKnow: 'Everything! I so stupid.... :('
      }]
      return knex('students').insert(students)
    });
};
