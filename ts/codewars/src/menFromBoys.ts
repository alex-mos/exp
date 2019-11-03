// men — even numbers
// boys — odd numbers
export default function menFromBoys(arr: number[]): number[] {
  const men: number[] = arr.filter(num => !(num % 2))
  const boys: number[] = arr.filter(num => num % 2)
  return [
    ...men.sort((a, b) => a - b),
    ...boys.sort((a, b) => b - a),
  ].filter((number, index, array) => array.indexOf(number) === index)
}


let a = [34, 11, 100, 45, 100, 1]
console.log('a.sort()')
console.log(a.sort((a, b) => a - b))
console.log(a.sort((a, b) => b - a))

