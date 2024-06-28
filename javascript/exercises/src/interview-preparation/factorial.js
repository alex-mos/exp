// факториал от пяти это
// 1 * 2 * 3 * 4 * 5
//     2   6   24  120
// factoral(5) === 120
// factoral(1) === 1
// factoral(0) === 1

function factorialCycle(number) {
  let result = 1
  for (let i = 1; i < number; i++) {
    result *= i + 1
  }
  return result
}

console.log(factorialCycle(0))
console.log(factorialCycle(1))
console.log(factorialCycle(5))

// рекурсия — это вызов функции
function factorialRecursion(number) {
  if (number <= 1) {
    return 1
  } else {
    return number * factorialRecursion(number - 1)
  }
}

console.log(factorialRecursion(0))
console.log(factorialRecursion(1))
console.log(factorialRecursion(5))
