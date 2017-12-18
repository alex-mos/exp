const express = require('express')
const MongoClient = require('mongodb').MongoClient
const bodyParser = require('body-parser')
const db = require('./config/db')
const app = express()

app.use(bodyParser.urlencoded({ extended: true }))

MongoClient.connect(db.url, (err, client) => {
  if (err) throw err
  const database = client.db('freecodecamp_api');

  require('./app/routes')(app, database)

  app.listen(8000, () => {
    console.log('We are live')
  })
})
