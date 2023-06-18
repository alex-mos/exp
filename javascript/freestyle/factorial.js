const assert = require('assert')

const factorialize = function(num) {
  if (num === 0) return 1
  return num * factorialize(num - 1)
}

assert.equal(factorialize(5), 120)
assert.equal(factorialize(0), 1)
