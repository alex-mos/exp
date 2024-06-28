/*
  factorial
 */
export function factorial(num) {
  const iter = (current, acc) => {
    if (current === 0) {
      return acc
    }
    return iter(current - 1, acc * current)
  }
  return iter(num, 1)
}
