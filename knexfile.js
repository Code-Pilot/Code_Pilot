// Update with your config settings.

module.exports = {

  development: {
  client: 'postgresql',
  connection: 'postgres://localhost/code_pilot',
  },
  production: {
      client: 'postgresql',
      connection: {
        database: 'my_db',
        user:     'username',
        password: 'password'
      }
    }
  }
