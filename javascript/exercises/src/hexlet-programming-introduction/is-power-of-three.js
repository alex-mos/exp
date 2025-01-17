export function isPowerOfThree(num) {
  while (num >= 1) {
    if (num === 1) return true
    num = num / 3
  }
  return false
}
