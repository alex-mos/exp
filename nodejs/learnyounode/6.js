const folder = process.argv[2]
const extension = process.argv[3]
const fileNameFilter = require('./6_filter')

fileNameFilter(folder, extension, function(err, list) {
  if (err) throw err
  console.log(list.join('\n'))
})
