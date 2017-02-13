const assert = require('assert')

const say = string1 => string2 => `${string1} ${string2}`

assert.equal(say('Hello')('World'), 'Hello World')
