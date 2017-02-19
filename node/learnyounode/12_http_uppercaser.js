const http = require('http')

const port = process.argv[2]

http.createServer((req, res) => {
  let body = ''
  req.on('data', data => body += data)
  req.on('end', () => {
    res.end(body.toUpperCase())
  })
}).listen(port)
