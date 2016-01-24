'use strict';

var mongo = require('mongodb').MongoClient;

var dbName = process.argv[2];
var collectionName = process.argv[3];
var targetId = process.argv[4];

var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var collection = db.collection(collectionName);

	collection.remove({
		'_id': targetId
	}, function(err, data) {
		if (err) throw err;
		db.close();
	});
});



