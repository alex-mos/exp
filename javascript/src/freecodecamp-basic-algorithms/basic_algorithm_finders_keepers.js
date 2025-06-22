const assert = require("assert")

function findElement(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      return arr[i]
    }
  }
}

assert.equal(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0
  }),
  8,
)
assert.equal(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0
  }),
  undefined,
)
