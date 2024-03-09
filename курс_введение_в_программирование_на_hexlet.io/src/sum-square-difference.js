export function sumSquareDifference(num) {
  return squareOfSum(num) - sumOfSquares(num)
}

function squareOfSum(num) {
  let sum = 0

  for (let i = 1; i <= num; i++) {
    sum += i
  }

  return sum * sum
}

function sumOfSquares(num) {
  let sumOfSquares = 0

  for (let i = 1; i <= num; i++) {
    sumOfSquares += i * i
  }

  return sumOfSquares
}
