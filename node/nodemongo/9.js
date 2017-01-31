const mongo = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017/learnyoumongo'
const size = process.argv[2]

mongo.connect(url, function(err, db) {
	if (err) throw err
	const collection = db.collection('prices')

	collection.aggregate([
		{$match: {size: size}},
		{$group: {
			_id: 'average',
			average: {
				$avg: '$price'
			}
		}}
	], function(err, data) {
		console.log(data[0].average.toFixed(2))
		db.close()
	})
})
