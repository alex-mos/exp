/*
  дан массив чисел arr и число int
  вернуть массив пар чисел из изначального массива, которые в сумме дают num
*/
export function findPairs(arr, int) {
  let result = []
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[i] + arr[j] === int) {
        result.push([arr[i], arr[j]])
      }
    }
  }
  return result
}
