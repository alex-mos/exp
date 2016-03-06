// Custom logging middleware.

module.exports = function (req, res, next) {
	var start = +new Date(); // +new converts date object to milliseconds;
	var stream = process.stdout;
	var url = req.url;
	var method = req.method;

	res.on('finish', function() {
		var finish = +new Date();
		var duration = finish - start;

		var message = method + ' to ' + url + ' took ' + duration + ' ms\n';
		stream.write(message);
	});

	next();
};

