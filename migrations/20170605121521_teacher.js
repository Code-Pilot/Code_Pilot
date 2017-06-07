
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments()
    table.string('uname').notNullable()
    table.string('pword').notNullable()
    table.string('fname').notNullable()
    table.string('lname').notNullable()
    table.string('email').notNullable()
    table.text('skills')
    table.string('userType').defaultTo('teacher')
    table.text('bio')
    table.string('lang1')
    table.string('lang2')
    table.string('lang3')
    table.boolean('isOnline').defaultTo(false)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teachers')
};
