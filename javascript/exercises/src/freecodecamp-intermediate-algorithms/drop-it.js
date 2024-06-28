import assert from "assert"

let a = [1, 2, 3, 4]
console.log(a.slice(2))

/**
 * Итерируется по массиву arr, передаёт каждый его элемент как аргумент в функцию func.
 * Как только func вернёт true, функция возвращает остаток массива, включая текущий элемент.
 * @param {array} arr
 * @param {function} func
 * @returns {array}
 */
function dropElements(arr, func) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result = arr.slice(i)
      break
    }
  }
  return result
}

assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3
  }),
  [3, 4],
)
assert.deepEqual(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1
  }),
  [1, 0, 1],
)
assert.deepEqual(
  dropElements([1, 2, 3], function (n) {
    return n > 0
  }),
  [1, 2, 3],
)
assert.deepEqual(
  dropElements([1, 2, 3, 4], function (n) {
    return n > 5
  }),
  [],
)
assert.deepEqual(
  dropElements([1, 2, 3, 7, 4], function (n) {
    return n > 3
  }),
  [7, 4],
)
assert.deepEqual(
  dropElements([1, 2, 3, 9, 2], function (n) {
    return n > 2
  }),
  [3, 9, 2],
)
