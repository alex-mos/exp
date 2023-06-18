const fs = require('fs')
const path = require('path');

const folder = process.argv[2]
const extension = `.${process.argv[3]}`

fs.readdir(folder, (err, files) => {
  if (err) throw err
  let filteredList = files.filter(file => path.extname(file) === extension)
  console.log(filteredList.join('\n'))
})
