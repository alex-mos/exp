const express = require('express')
const app = new express()
const port = (process.argv[2] || 3000)

app.get('/search', (req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(req.query))
})

app.listen(port)
