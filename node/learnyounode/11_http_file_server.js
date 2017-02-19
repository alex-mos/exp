const http = require('http')
const fs = require('fs')

const port = process.argv[2]
const file = process.argv[3]

http.createServer((req, res) => {

  fs.access(file, fs.constants.R_OK, (err) => {
    if (err) {
      res.end('File not found')
    }

    let fileStream = fs.createReadStream(file)
    fileStream.pipe(res)
  })

}).listen(port)
