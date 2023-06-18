const fs = require('fs')

let numbers
let target

// contents = fs.readFileSync('./input.txt', 'ascii').split('\n')
// target = Number(contents[0])
// numbers = contents[1].split(' ').map(element => Number(element))


const rr = fs.createReadStream('./input.txt')

rr.on('readable', () => {
  console.log(rr.read())
})


// fs.writeFileSync('./output.txt', String(hasPair(numbers, target)))

// function hasPair (numbers, target) {
//   const indexedNums = {}
//   for (let i = 0; i < numbers.length; i++) {
//     if (indexedNums[target - numbers[i]] !== undefined) {
//       return 1
//     }
//     indexedNums[numbers[i]] = i
//   }
//   return 0
// }
