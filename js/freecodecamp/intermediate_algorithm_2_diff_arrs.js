const assert = require('assert')

const diffArray = (arr1, arr2) => {
  let result = []
  arr1.map(item => {
    if (!arr2.includes(item)) {
      result.push(item)
    }
  })
  arr2.map(item => {
    if (!arr1.includes(item)) {
      result.push(item)
    }
  })
  return result.sort((a, b) => a - b)
}

assert.deepEqual(diffArray([1, 3], [1, 2, 3]), [2])
assert.deepEqual(diffArray([1, 3, 4], [1, 2, 3]), [2, 4])
