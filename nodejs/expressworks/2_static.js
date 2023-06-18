const express = require('express')
const app = express()

const port = process.argv[2]
const requstedFile = process.argv[3]

app.use(express.static(requstedFile || './public'))

app.listen(port)
