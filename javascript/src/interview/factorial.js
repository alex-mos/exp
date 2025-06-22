export const factorialCycle = (n) => {
  let result = 1
  for (let i = 1; i < n; i++) {
    result *= i + 1
  }
  return result
}

export const factorialRecursion = (n) => {
  if (n <= 1) {
    return 1
  } else {
    return n * factorialRecursion(n - 1)
  }
}

export const factorial2 = (n) => {
  if (n === 0) return 1
  return n * factorial2(n - 1)
}

export const factorial3 = (num) => {
  const iter = (current, acc) => {
    if (current === 0) {
      return acc
    }
    return iter(current - 1, acc * current)
  }
  return iter(num, 1)
}
