
exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', (table) => {
    table.increments()
    table.string('uname').notNullable()
    table.string('pword').notNullable()
    table.string('fname').notNullable()
    table.string('lname').notNullable()
    table.string('email').notNullable()
    table.text('bio')
    table.string('userType').defaultTo('student')
    table.string('stack')
    table.string('lang1')
    table.string('lang2')
    table.string('langToKnow1')
    table.string('langToKnow2')
    table.boolean('isOnline').defaultTo(false)
  })


};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('students')

};
