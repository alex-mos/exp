const assert = require('assert')

const bouncer = (arr) => arr.filter(item => Boolean(item))

assert.deepEqual(bouncer([7, "ate", "", false, 9]), [7, "ate", 9])
assert.deepEqual(bouncer(["a", "b", "c"]), ["a", "b", "c"])
assert.deepEqual(bouncer([false, null, 0, NaN, undefined, ""]), [])
assert.deepEqual(bouncer([1, null, NaN, 2, undefined]), [1, 2])
