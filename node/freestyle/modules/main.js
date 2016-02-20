'use strict';

var triangle = require('./triangle');

triangle.area(30, 4, function(err, area) {
	if (err) throw err;
	console.log(area);
});