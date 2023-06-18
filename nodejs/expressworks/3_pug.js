const express = require('express')
const app = express()

const port = (process.argv[2] || 3000)

app.set('view engine', 'pug')
app.set('views', './templates')

app.get('/home', (req, res) => {
  let date = new Date().toDateString()
  res.render((process.argv[3] || 'index'), {date: date})
})

app.listen(port)
