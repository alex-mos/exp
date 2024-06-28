const express = require('express')
const app = express()
const bodyparser = require('body-parser')

const port = (process.argv[2] || 3000)

app.use(bodyparser.urlencoded({extended: false}))

app.set('view engine', 'pug')
app.set('views', './templates')

app.get('/form', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end('<form method=\'post\'><input name=\'str\' /></form>')
})

app.post('/form', (req, res) => {
  stringBackwards = req.body.str.split('').reverse().join('')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(stringBackwards)
})

app.listen(port)
