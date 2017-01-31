const mongo = require('mongodb').MongoClient
const dbName = process.argv[2]
// const dbName = 'learnyoumongo'
const url = 'mongodb://localhost:27017/' + dbName

mongo.connect(url, function(err, db) {
	if (err) throw err
	const collection = db.collection('users')

	collection.update({
		name: 'Tina'
	}, {
		$set: {
			age: 40
		}
	}, function(err, data) {
		if (err) throw err
		db.close()
	})
})
