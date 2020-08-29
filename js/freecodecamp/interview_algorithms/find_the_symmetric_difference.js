const assert = require('assert')

function sym(...args) {
  let result = args[0]
  for (let i = 1; i < args.length; i++) {
    result = getTwoArraysDifference(result, args[i])
  }
  return result
}

function getTwoArraysDifference(arr1, arr2) {
  const concattedUniq = uniq(arr1).concat(uniq(arr2))
    .reduce((acc, item) => {
      if (acc[item]) {
        acc[item]++
      } else {
        acc[item] = 1
      }
      return acc
    }, {})

  const difference = []
  for (const key in concattedUniq) {
    if (concattedUniq[key] === 1) {
      difference.push(key)
    }
  }
  return difference
}

function uniq(arr) {
  return [...new Set(arr)]
}

assert.deepEqual(getTwoArraysDifference([1, 2, 5], [2, 3, 5]), [1, 3])
assert.deepEqual(getTwoArraysDifference([1, 3], [3, 4, 5]), [1, 4, 5])
assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5])
assert.deepEqual(sym([1, 2, 3, 3], [5, 2, 1, 4]), [3, 4, 5])
assert.deepEqual(sym([1, 2, 3], [5, 2, 1, 4, 5]), [3, 4, 5])
assert.deepEqual(sym([1, 2, 5], [2, 3, 5], [3, 4, 5]), [1, 4, 5])
assert.deepEqual(sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5])
assert.deepEqual(sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]), [2, 3, 4, 6, 7])
assert.deepEqual(
  sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]),
  [1, 2, 4, 5, 6, 7, 8, 9],
)
