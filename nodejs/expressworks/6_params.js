const express = require('express')
const app = express()
const crypto = require('crypto')
const port = (process.argv[2] || 3000)

app.put('/message/:id', (req, res) => {
  const id = req.params.id
  const hash = crypto
                 .createHash('sha1')
                 .update(new Date().toDateString() + id)
                 .digest('hex')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(hash)
})

app.listen(port)
