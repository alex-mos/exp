import assert from 'assert'

function addTogether(a, b) {
  if (typeof a !== 'number') {
    return
  }
  if (!b) {
    return function (c) {
      if (typeof c !== 'number') {
        return
      }
      return a + c
    }
  }
  if (typeof b !== 'number') {
    return
  }
  return a + b
}

assert.equal(addTogether(2, 3), 5)
assert.equal(addTogether(2)(3), 5)
assert.equal(addTogether("http://bit.ly/IqT6zt"), undefined)
assert.equal(addTogether(2, "3"), undefined)
assert.equal(addTogether(2)([3]), undefined)

console.log(isNaN(3))
console.log(isNaN('3'))
console.log(isNaN([3]))