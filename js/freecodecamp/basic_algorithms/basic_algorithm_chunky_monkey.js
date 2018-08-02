const assert = require('assert');

/*
 * Function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.
 * @param {array} arr - The title of the book.
 * @param {number} size - The author of the book.
 */
function chunkArrayInGroups(arr, size) {
  let subArrayItemNumber = 0;
  let result = [];
  let innerArray = [];
  arr.forEach(item => {
    if (subArrayItemNumber >= size) {
      result.push(innerArray);
      subArrayItemNumber = 0;
      innerArray = [];
    }
    innerArray.push(item);
    subArrayItemNumber++;
  });
  if (innerArray.length) {
    result.push(innerArray);
  }
  return result;
}

let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

let a = animals.slice(1, 2)
a


assert.deepEqual(chunkArrayInGroups(["a", "b", "c", "d"], 2), [["a", "b"], ["c", "d"]])
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3), [[0, 1, 2], [3, 4, 5]])
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2), [[0, 1], [2, 3], [4, 5]])
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4), [[0, 1, 2, 3], [4, 5]])
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3), [[0, 1, 2], [3, 4, 5], [6]])
assert.deepEqual(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4), [[0, 1, 2, 3], [4, 5, 6, 7], [8]])
