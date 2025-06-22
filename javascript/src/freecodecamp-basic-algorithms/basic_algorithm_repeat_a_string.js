const assert = require("assert")

const repeatStringNumTimes = (str, num) => {
  let result = ""
  if (num < 1) {
    return result
  } else {
    for (let i = 0; i < num; i++) {
      result += str
    }
    return result
  }
}

assert.equal(repeatStringNumTimes("*", 3), "***")
assert.equal(repeatStringNumTimes("abc", -2), "")
