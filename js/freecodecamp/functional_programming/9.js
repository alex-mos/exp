import assert from 'assert'

function nonMutatingPush(original, newItem) {
  let newArray = original.slice()
  return newArray.concat(newItem)
}

let first = [1, 2, 3];
let second = [4, 5];

assert.deepEqual(nonMutatingPush(first, second), [1, 2, 3, 4, 5])

console.log(first)
console.log(second)