const assert = require('assert')

const largestOfFour = (arr) => {
  let result = []
  arr.map(subArr => result.push(subArr.sort((a, b) => a - b)[subArr.length - 1]))
  return result
}

assert.deepEqual(largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1]
  ]), [27,5,39,1001])

assert.deepEqual(largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1]
  ]), [9, 35, 97, 1000000])
