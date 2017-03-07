const express = require('express')
const app = express()
const stylus = require('stylus')

const port = (process.argv[2] || 3000)
const staticDir = (process.argv[3] || './public')

app.use(stylus.middleware(staticDir))
app.use(express.static(staticDir))

app.listen(port)
