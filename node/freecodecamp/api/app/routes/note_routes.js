const ObjectID = require('mongodb').ObjectID

module.exports = function(app, database) {
  app.post('/notes', (req, res) => {
    const note = {
      title: req.body.title,
      text: req.body.body
    }

    database.collection('notes').insertOne(note, (err, result) => {
      if (err) {
        res.send({ error: 'An error has occured' })
      } else {
        res.send(result.ops[0]) // created note
      }
    })
  })

  app.get('/notes', (req, res) => {
    database.collection('notes').find({}).toArray(function(err, docs) {
      if (err) {
        res.send({ error: 'An error has occured' })
      } else {
        res.send(docs)
      }
    })
  })

  app.get('/note/:id', (req, res) => {
    const id = req.params.id
    const details = {
      _id: new ObjectID(id)
    }

    database.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occured' })
      } else {
        res.send(item)
      }
    })
  })

  app.put('/note/:id', (req, res) => {
    const id = req.params.id
    const details = {
      _id: new ObjectID(id)
    }
    const note = {
      title: req.body.title,
      text: req.body.body
    }

    database.collection('notes').update(details, note, (err, item) => {
      if (err) {
        res.send({ error: 'An error has occured' })
      } else {
        res.send(item)
      }
    })
  })

  app.delete('/note/:id', (req, res) => {
    const id = req.params.id
    const details = {
      _id: new ObjectID(id)
    }

    database.collection('notes').deleteOne(details, (err) => {
      if (err) {
        res.send({ error: 'An error has occured' })
      } else {
        res.send(`Note ${id} deleted`)
      }
    })
  })
}
