var assert = require('assert');

var square = function (num) {
	return num * num;
};

assert.equal(square(2), 4, 'square of 2 must be 4');
assert(square(3) === 9, '3^2=9');