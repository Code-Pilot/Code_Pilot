
exports.up = function(knex, Promise) {
  return knex.schema.createTable('teachers', (table) => {
    table.increments()
    table.string('uname').notNullable()
    table.string('pword').notNullable()
    table.string('fname').notNullable()
    table.string('lname').notNullable()
    table.string('email').notNullable()
    table.text('bio')
    table.text('skills')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('teachers')
};
