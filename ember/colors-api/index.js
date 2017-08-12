const express = require('express')
const app = express()
const mongo = require('mongodb').MongoClient

app.get('/', (req, res) => {
  mongo.connect('mongodb://localhost:27017/colors', (err, db) => {
    if (err) throw err
    const collection = db.collection('colors')

    collection.find({}).toArray((err, docs) => {
      if (err) throw err
      res.status(200).json(docs)
      db.close()
    })
  })
})

app.listen(7000)
