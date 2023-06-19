/* Returns either the index of the location in the array,
  or -1 if the array did not contain the targetValue */
const doSearch = function(array, targetValue) {
	const min = 0
	const max = array.length - 1
  const guess

	function makeGuess () {
     guess = Math.floor(((max - min) / 2) + min)
  }
  makeGuess()

  while (arr[guess] !== targetValue) {
    iterationCounter++
    if (min > max) {
      return -1
    }
    if (arr[guess] > targetValue) {
      max = guess - 1
      makeGuess()
    } else {
      min = guess + 1
      makeGuess()
    }
  }

  return guess
}

const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

const result = doSearch(primes, 73)
// println("Found prime at index " + result)

//Program.assertEqual(doSearch(primes, 73), 20)





// binary search
// const binSearch = (arr, targetValue) => {
//   let iterationCounter = 0
//   let min = 0
//   let max = arr.length - 1
//   let guess
//   function makeGuess () {
//      guess = Math.floor(((max - min) / 2) + min)
//   }
//   makeGuess()
//
//   while (arr[guess] !== targetValue) {
//     iterationCounter++
//     if (min > max) {
//       return -1
//     }
//     if (arr[guess] > targetValue) {
//       max = guess - 1
//       makeGuess()
//     } else {
//       min = guess + 1
//       makeGuess()
//     }
//   }
//
//   console.log(`binary search iterations: ${iterationCounter}`)
//   return guess
// }

const assert = require('assert')

assert.equal(doSearch(primes, 73), 20)
