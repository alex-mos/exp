var promise = new Promise(function (fullfill, reject) {
	reject('Oh, on no!');
}).catch(function (err) {
	console.log(err);
});