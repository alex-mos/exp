'use strict';

var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

var size = process.argv[2];

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var collection = db.collection('prices');

	collection.aggregate([
		{$match: {size: size}},
		{$group: {
			_id: 'average',
			average: {
				$avg: '$price'
			}
		}}
	], function(err, data){
		console.log(data[0].average.toFixed(2));
		db.close();
	});

});