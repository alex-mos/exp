const assert = require('assert')

// factorial
var factorial = function (n) {
	if (n === 0) return 1
	return n * factorial(n - 1)
}

assert.equal(factorial(0), 1)
assert.equal(factorial(5), 120)

// exercise
function sequenceSum(begin, end, step) {
	if (begin > end) return 0
	return begin + sequenceSum(begin + step, end, step)
}

assert.equal(sequenceSum(1, 5, 1), 15) // 1 + 2 + 3 + 4 + 5 = 15
assert.equal(sequenceSum(1, 5, 3), 5) // 1 + 4 = 5
