const express = require('express')
const app = express()
const fs = require('fs')
const port = (process.argv[2] || 3000)
const fileName = (process.argv[3] || './example.json')

app.get('/books', (req, res) => {
  fs.access(fileName, fs.constants.R_OK, err => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'})
      res.end('File not found')
    } else {
      fs.readFile(fileName, (err, data) => {
        if (err) throw err
        res.json(JSON.parse(data.toString()))
      })
    }
  })
})

app.listen(port)
