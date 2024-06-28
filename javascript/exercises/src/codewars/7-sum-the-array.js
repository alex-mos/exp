const assert = require("assert")

Array.prototype.sum = function () {
  return this.reduce((sum, el) => sum + el, 0)
}

assert.equal([].sum(), 0)
assert.equal([2, 5, 7].sum(), 14)
