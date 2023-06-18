const fs = require('fs')
const filePath = process.argv[2]

fs.readFile(filePath, (err, data) => {
  if (err) throw err
  let fileNewlinesQty = data.toString().match(/\n/g).length
  console.log(fileNewlinesQty)
})
