
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments()
    table.string('uname').notNullable()
    table.string('pword').notNullable()
    table.string('fname').notNullable()
    table.string('lname').notNullable()
    table.string('email').notNullable()
    table.text('bio')
    table.text('priorKnowledge')
    table.text('toKnow')
  })


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')

};
