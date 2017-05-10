const say = string1 => string2 => `${string1} ${string2}`

/* test */
const assert = require('assert')
assert.equal(say('Hello')('World'), 'Hello World')
