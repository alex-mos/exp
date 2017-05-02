const assert = require('assert')

const validBraces = (str) => {

}

assert.equal(validBraces("(){}[]"), true)
assert.equal(validBraces("(}"), false)
assert.equal(validBraces("[(])"), false)
assert.equal(validBraces("([{}])"), true)
