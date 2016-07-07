const mongo = require('mongodb').MongoClient;

const minAge = Number(process.argv[2]);

const url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function (err, db) {
  if (err) throw err;

  const collection = db.collection('parrots');

  collection.count({
    age: {
      $gt: minAge
    }
  }, function (err, count) {
    if (err) throw err;
    console.log(count);
    db.close();
  });
});



