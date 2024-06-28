import assert from "assert"

/**
 * Приводит массив arr к плоской структуре.
 * @param arr
 * @returns {array}
 */
function steamrollArray(arr) {
  let result = []
  function flatten(arr) {
    if (Array.isArray(arr)) {
      arr.forEach((item) => flatten(item))
    } else {
      result.push(arr)
    }
  }
  flatten(arr)
  return result
}

assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"])
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4])
assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4])
assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
