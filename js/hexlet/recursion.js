'use strict';

const assert = require('assert');

// factorial
var factorial = function (n) {
	if (n === 0) return 1;

	return n * factorial(n - 1);
};

assert.equal(factorial(0), 1);
assert.equal(factorial(5), 120);


// my
function sequenceSum(start, stop, step) {
	if (start > stop) return start;
	return sequenceSum(start + step, stop, step);
}

assert.equal(sequenceSum(1, 5, 1), 15);
assert.equal(sequenceSum(1, 5, 3), 5);