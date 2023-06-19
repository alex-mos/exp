/**
 * Является ли число num простым?
 * @param num
 * @return {boolean}
 */
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

/**
 * Возвращает сумму всех простых чисел меньше или равных num
 * @param {number} num
 * @return {number}
 */
function sumPrimes(num) {
  let result = 0
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      result += i
    }
  }
  return result
}


assert(isPrime(2))
assert(isPrime(5))
assert(isPrime(7))
assert(!isPrime(6))

assert.equal(sumPrimes(10), 17)
assert.equal(sumPrimes(977), 73156)
