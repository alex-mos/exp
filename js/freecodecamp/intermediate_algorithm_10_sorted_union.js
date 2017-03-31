const assert = require('assert')

const uniteUnique = function() {
  let result = []
  let array = Array.prototype.slice.call(arguments);

  array.map(arr => arr.map(item => {
    if (!result.includes(item)) {
      result.push(item)
    }
  }))

  return result
}

assert.deepEqual(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]), [1, 3, 2, 5, 4])
assert.deepEqual(uniteUnique([1, 2, 3], [5, 2, 1]), [1, 2, 3, 5])
