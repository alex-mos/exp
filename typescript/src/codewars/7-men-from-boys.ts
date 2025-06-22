// men — even numbers
// boys — odd numbers
export default function menFromBoys(arr: number[]): number[] {
  const men: number[] = arr.filter((num) => !(num % 2))
  const boys: number[] = arr.filter((num) => num % 2)
  return [...men.sort((a, b) => a - b), ...boys.sort((a, b) => b - a)].filter(
    (number, index, array) => array.indexOf(number) === index,
  )
}
