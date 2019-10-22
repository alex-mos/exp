export default function sumTriangularNumbers (num: number): number {
  let result: Array<number> = []
  let counter: number = 1
  let row: number = 1
  let rowInnerCounter = 1
  for (let i: number = 1; i <= num; i++) {
    while (rowInnerCounter < row) {
      counter++
      rowInnerCounter++
    }
    rowInnerCounter = 0
    row++
    result.push(counter)
  }
  return result.reduce((acc: number, item: number) => acc += item, 0)
}

// export default function sumTriangularNumbers(n:number):number {
//   return n < 0 ? 0 : (n * (n + 1) * (n + 2)) / 6;
// }
