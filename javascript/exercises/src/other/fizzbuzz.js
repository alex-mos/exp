const assert = require("assert")

const fizzbuzz = (num) => {
  if (!(num % 3) && !(num % 5)) {
    return "FizzBuzz"
  } else if (!(num % 3)) {
    return "Fizz"
  } else if (!(num % 5)) {
    return "Buzz"
  } else {
    return num
  }
}

assert.equal(fizzbuzz(3), "Fizz")
assert.equal(fizzbuzz(5), "Buzz")
assert.equal(fizzbuzz(15), "FizzBuzz")
assert.equal(fizzbuzz(31), 31)
