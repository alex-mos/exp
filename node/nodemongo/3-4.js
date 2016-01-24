'use strict';

var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';
var age = parseInt(process.argv[2]);

mongo.connect(url, function(err, db) {

	if (err == null) {

		//console.log('connect successful');

		var collection = db.collection('parrots');

		collection.find({
			age: {$gt: age}
		}, {
			name: 1,
			age: 1,
			_id: 0
		}).toArray(function(err, documents) {
			console.log(documents);
			db.close();
		});

	}

});