const assert = require("assert")

const sumAll = (arr) => {
  let min = arr.sort((a, b) => a - b)[0]
  const max = arr.sort((a, b) => a - b)[1]
  let result = 0
  while (min <= max) {
    result += min
    min++
  }
  return result
}

assert.equal(sumAll([1, 4]), 10)
assert.equal(sumAll([4, 1]), 10)
assert.equal(sumAll([5, 10]), 45)
