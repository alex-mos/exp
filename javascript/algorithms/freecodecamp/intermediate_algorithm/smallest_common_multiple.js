import assert from 'assert'

/**
 * Проверяет, делится ли без остатка число num на все числа в диапазоне от start до end включительно.
 * @param {number} num
 * @param {number} start
 * @param {number} end
 * @returns {boolean}
 */
function isDividesOnRange (num, start, end) {
  for (let i = start; i <= end; i++) {
    if (num % i) {
      return false
    }
  }
  return true
}

/**
 * Возвращает наименьшее число, которое делится без остатка на все числа между наименьшим и наибольшим числом
 * в массиве arr, включительно.
 * @param arr
 * @returns {number}
 */
function smallestCommons(arr) {
  let [start, end] = arr.slice().sort((a, b) => a - b)
  let current = end

  while (!isDividesOnRange(current, start, end)) {
    current += end
  }
  return current
}

assert(smallestCommons([1, 5]))
assert.equal(smallestCommons([1, 5]), 60)
assert.equal(smallestCommons([5, 1]), 60)
assert.equal(smallestCommons([2, 10]), 2520)
assert.equal(smallestCommons([1, 13]), 360360)
assert.equal(smallestCommons([23, 18]), 6056820)
