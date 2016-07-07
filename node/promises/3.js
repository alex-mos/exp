var promise = new Promise(function (fulfill, reject) {
	setTimeout(function () {
		var error = {};
		error.message = 'REJECTED!';
		reject(error);
	}, 300);
}).then(function (error) {
	onReject(error);
});

var onReject = function (error) {
	console.log(error.message);
};