var promise = new Promise(function (fulfill, reject) {
	setTimeout(function () {
		// var error = new Error();
		// error.message = 'REJECTED!';
		reject(new Error('REJECTED!'));
	}, 300);
}).then(null, onReject);

function onReject(error) {
	console.log(error.message);
}