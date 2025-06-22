const assert = require("assert")

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length; i++) {
    if (num <= arr[i]) {
      return i
    }
  }
  return arr.length
}

assert.equal(getIndexToIns([10, 20, 30, 40, 50], 35), 3)
assert(!isNaN(getIndexToIns([10, 20, 30, 40, 50], 35)))
assert.equal(getIndexToIns([10, 20, 30, 40, 50], 30), 2)
assert(!isNaN(getIndexToIns([10, 20, 30, 40, 50], 30)))
assert.equal(getIndexToIns([40, 60], 50), 1)
assert(!isNaN(getIndexToIns([40, 60], 50)))
assert.equal(getIndexToIns([3, 10, 5], 3), 0)
assert(!isNaN(getIndexToIns([3, 10, 5], 3)))
assert.equal(getIndexToIns([5, 3, 20, 3], 5), 2)
assert(!isNaN(getIndexToIns([5, 3, 20, 3], 5)))
assert.equal(getIndexToIns([2, 20, 10], 19), 2)
assert(!isNaN(getIndexToIns([2, 20, 10], 19)))
assert.equal(getIndexToIns([2, 5, 10], 15), 3)
assert(!isNaN(getIndexToIns([2, 5, 10], 15)))
assert.equal(getIndexToIns([], 1), 0)
