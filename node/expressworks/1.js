const express = require('express')
const app = express()

const port = process.argv[2]

app.get('/home', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello World!')
})

app.listen(port)
