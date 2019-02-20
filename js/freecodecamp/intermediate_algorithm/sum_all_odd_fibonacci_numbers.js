import assert from 'assert'

/**
 * Возвращает число Фибоначчи для числа num
 * @param {number} num
 * @returns {number}
 */
function fibonacci (num) {
  if (num < 2) {
    return num
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

/**
 * Возвращает сумму всех нечётных чисел ряда Фибоначчи меньше num
 * @param {number} num
 * @returns {number}
 */
function sumFibs (num) {
  let i = 0
  let result = 0

  while (true) {
    if (fibonacci(i) % 2) {
      if (fibonacci(i) > num) {
        break
      }
      result += fibonacci(i)
    }
    i++
  }
  return result
}

assert.equal(sumFibs(1000), 1785)
assert.equal(sumFibs(4000000), 4613732)
assert.equal(sumFibs(75024), 60696)
assert.equal(sumFibs(75025), 135721)