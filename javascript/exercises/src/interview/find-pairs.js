/*
  Дан массив чисел arr и число num.
  Вернуть массив пар чисел из изначального массива, которые в сумме дают num.
*/

export function findPairs(arr, num) {
  let result = []
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        result.push([arr[i], arr[j]])
      }
    }
  }
  return result
}
