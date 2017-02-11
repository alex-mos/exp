const fs = require('fs')
const path = require('path')

var fileNameFilter = function(folder, extension, callback) {
  fs.readdir(folder, (err, files) => {
    if (err) return callback(err)
    let filteredList = files.filter(file => path.extname(file) === `.${extension}`)
    callback(null, filteredList)
  })
}

module.exports = fileNameFilter
