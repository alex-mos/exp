function createCounter() {
  let numberOfCalls = 0

  return function () {
    return ++numberOfCalls
  }
}

// var fn = createCounter();

// console.log(fn()); // 1
// console.log(fn()); // 2
// console.log(fn()); // 3

/***/

var fn = (function () {
  let numberOfCalls = 0

  return function () {
    return ++numberOfCalls
  }
})()

console.log(fn()) // 1
console.log(fn()) // 2
console.log(fn()) // 3
