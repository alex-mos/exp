const assert = require('assert')

// sorted array of numbers 1...100 generation
const generateArray = (len) => {
  let result = []
  for (let i = 0; i < len; i++) {
    result.push(Math.floor(Math.random() * 100) + 1)
  }
  return result.sort((a, b) => (a - b))
}

assert.equal(generateArray(5).length, 5)

// get random number from array
const randomElement = (arr) => {
  let index =  Math.floor(Math.random() * arr.length);
  return arr[index]
}

let testArray = generateArray(10)
assert.equal(testArray.includes(randomElement(testArray)), true)

// linear search
const linearSearch = (arr, targetValue) => {
  let iterationCounter = 0
  for (let i = 0; i < arr.length; i++) {
    iterationCounter++
    if (arr[i] === targetValue) {
      console.log(`linear search iterations: ${iterationCounter}`)
      return i
      break
    }
  }
}

// binary search
const binSearch = (arr, targetValue) => {
  let iterationCounter = 0
  let min = 0
  let max = arr.length - 1
  let guess
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

  console.log(`binary search iterations: ${iterationCounter}`)
  return guess
}

let array = generateArray(100)
let targetValue = randomElement(array)
console.log(`target value is ${targetValue}`)
linearSearch(array, targetValue)
binSearch(array, targetValue)
