const fs = require('fs')
const path = process.argv[2]
const extension = process.argv[3]

fs.readdir(path, (err, list) => {
  if (err) throw err
  let filteredList = list.filter(item => item.slice(item.lastIndexOf('.') + 1) === extension)
  console.log(filteredList.join('\n'))
})
