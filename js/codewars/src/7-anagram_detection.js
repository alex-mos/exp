const assert = require('assert')

const normalize = (str) => str.toLowerCase().split('').sort().join('')
const isAnagram = (test, original) => normalize(test) === normalize(original)

assert.equal(isAnagram('Buckethead', 'DeathCubeK'), true)
assert.equal(isAnagram('Twoo', 'WooT'), true)
