'use strict';

var mongo = require('mongodb').MongoClient;

var dbName = 'learnyoumongo';
var url = 'mongodb://localhost:27017/' + dbName;

mongo.connect(url, function(err, db) {
	if (err) throw err;

	var collection = db.collection('users');

	collection.update({
		name: 'Tina'
	}, {
		$set: {
			age: 40
		}
	}, function(err, data) {
		if (err) throw err;

		db.close();
	})
});



