module.exports = {
  port: 8081,
  db: {
    database: 'tabtracker',
    user: 'tabtracker',
    password: 'tabtracker',
    options: {
      dialect: 'sqlite',
      host: 'localhost',
      storage: './tabtracker.sqlite'
    }
  }
}
