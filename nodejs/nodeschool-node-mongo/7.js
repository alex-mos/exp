const mongo = require('mongodb').MongoClient

const dbName = process.argv[2]
const collectionName = process.argv[3]
const targetId = process.argv[4]
const url = 'mongodb://localhost:27017/' + dbName

mongo.connect(url, function(err, db) {
	if (err) throw err
	const collection = db.collection(collectionName)

	collection.remove({
		'_id': targetId
	}, function(err, data) {
		if (err) throw err
		db.close()
	})
})
