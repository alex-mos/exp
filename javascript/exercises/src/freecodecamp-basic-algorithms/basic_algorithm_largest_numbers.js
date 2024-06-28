const assert = require("assert")

/* моё решение */
const largestOfFour = (arr) => arr.map((item) => Math.max(...item))

/* выёбистое решение от Саши Диктяренко */
// const largestOfFour = arr => arr.map(Function.apply.bind(Math.max, null))

/* попытки разобраться в выёбистом решении */
// let arr = [1, 4, 5]
// let result
// result = Math.max(...arr)
// result = Math.max.apply(null, arr)
// result = Function.apply.bind(Math.max, null)
// console.log(result(arr))
// result = Function.apply.bind(Math.max, null)(arr)
// console.log(result)

assert.deepStrictEqual(
  largestOfFour([
    [13, 27, 18, 26],
    [4, 5, 1, 3],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
  ]),
  [27, 5, 39, 1001],
)

assert.deepStrictEqual(
  largestOfFour([
    [4, 9, 1, 3],
    [13, 35, 18, 26],
    [32, 35, 97, 39],
    [1000000, 1001, 857, 1],
  ]),
  [9, 35, 97, 1000000],
)
