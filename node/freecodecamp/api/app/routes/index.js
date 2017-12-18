const noteRoute = require('./note_routes')

module.exports = function(app, database) {
  noteRoute(app, database)
}