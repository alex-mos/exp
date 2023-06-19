const assert = require('assert')

const frankenSplice = (arr1, arr2, n) => {
  return [].concat(arr2.slice(0, n)).concat(arr1).concat(arr2.slice(n))
}

assert.deepEqual(frankenSplice([1, 2, 3], [4, 5], 1), [4, 1, 2, 3, 5])
assert.deepEqual(frankenSplice([1, 2], ['a', 'b'], 1), ['a', 1, 2, 'b'])
assert.deepEqual(frankenSplice(['claw', 'tentacle'], ['head', 'shoulders', 'knees', 'toes'], 2), ['head', 'shoulders', 'claw', 'tentacle', 'knees', 'toes'])
