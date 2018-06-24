const assert = require('assert')

const confirmEnding = (str, target) => str.substring(str.length - target.length) === target

assert.equal(confirmEnding("He has to give me a new name", "name"), true)
assert.equal(confirmEnding("Open sesame", "pen"), false)
