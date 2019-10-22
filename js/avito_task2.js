import assert from 'assert'

// моё решение
// function findPairs (arr, int) {
//   let result = []
//   for (let i = 0; i <= arr.length - 1; i++) {
//     for (let j = i+1; j <= arr.length; j++) {
//       if (arr[i]+arr[j] === int) {
//         result.push([arr[i], arr[j]])
//       }
//     }
//   }
//   return result
// }

// решение Макса
// function findPairs (arr, num) {
//   const map = new Map();
//   for (let idx = 0; idx < arr.length; idx++) {
//     const comp = num - arr[idx];
//
//     if (map.has(comp)) {
//       return [map.get(comp), idx]
//     }
//
//     map.set(arr[idx], idx)
//   }
// }

assert.deepEqual(findPairs([2, 3, 4, 0, 5], 5), [[2, 3], [0, 5]])
