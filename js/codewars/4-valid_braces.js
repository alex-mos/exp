function validBraces (str) {

}

/* test */
const assert = require('assert')

assert.equal(validBraces("(){}[]"), true)
assert.equal(validBraces("(}"), false)
assert.equal(validBraces("[(])"), false)
assert.equal(validBraces("([{}])"), true)
