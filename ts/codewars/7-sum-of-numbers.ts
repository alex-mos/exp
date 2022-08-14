// Даны два числа a и b. Найти сумму всех чисел между ними, включительно.
// Если числа равны, вернуть одно из них.
// Числа могут идти не по порядку.
export function getSum(a: number, b: number): number {
  const [min, max] = [a, b].sort()
  let result: number = 0
  for (let i = min; i <= max; i++) {
    result += i
  }
  return result
}
