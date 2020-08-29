const assert = require('assert')

// factorial
const factorial = (n) => {
  const iter = (current, acc) => {
    if (current === 0) {
      return acc
    }
    return iter(current - 1, acc * current)
  }
  return iter(n, 1)
}

assert.equal(factorial(0), 1)
assert.equal(factorial(5), 120)


// smallest divisor

// Реализуйте и экспортируйте рекурсивную функцию smallestDivisor используя итеративный процесс. Функция должна находить минимальный делитель переданного числа.
// Для этого достаточно последовательно проверять делимость начиная с двойки. Если делитель не найден, значит число простое и делителем является само число.

const smallestDivisor = (n) => {
  const iter = (current, acc) => {
    if (current === 0) {
      return acc
    }
    return iter(current - 1)
  }
  return iter(n)
}

assert.equal(smallestDivisor(15), 3)
assert.equal(smallestDivisor(17), 17)
