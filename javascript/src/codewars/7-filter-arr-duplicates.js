// my
const unique = (arr) =>
  arr.filter((item, index) => !arr.slice(0, index).includes(item))

// best
/*
const unique = (arr) => arr.filter((x, i) => arr.indexOf(x) === i)
*/

// test
/*
assert.deepEqual(unique([4]), [4])
assert.deepEqual(unique([1, 2, 2, 3]), [1, 2, 3])
assert.deepEqual(unique([8, 4, 5, 2, 7, 8, 1, 5, 4, 4]), [8, 4, 5, 2, 7, 1])
*/
