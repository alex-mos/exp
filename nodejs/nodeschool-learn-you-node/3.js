const fs = require('fs')
const filePath = process.argv[2]
let fileContent = fs.readFileSync(filePath).toString()
let fileNewlinesQty = fileContent.match(/\n/g).length
console.log(fileNewlinesQty)
