import assert from 'assert'

/**
 * Приводит массив arr к плоской структуре.
 * @param arr
 * @returns {array}
 */
function steamrollArray (arr) {
  let result = []

  function inner (item) {
    if (Array.isArray(item)) {
      arr.forEach(i => {
        result.push(i)
      })
    }
    result.push(item)
  }

  arr.map(item => {
    inner(item)
  })

  return result
}

// assert.deepEqual(steamrollArray([[["a"]], [["b"]]]), ["a", "b"])
assert.deepEqual(steamrollArray([1, [2], [3, [[4]]]]), [1, 2, 3, 4])
// assert.deepEqual(steamrollArray([1, [], [3, [[4]]]]), [1, 3, 4])
// assert.deepEqual(steamrollArray([1, {}, [3, [[4]]]]), [1, {}, 3, 4])
