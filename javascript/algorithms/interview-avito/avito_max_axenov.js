// дан массив чисел arr и число int
// вернуть массив пар чисел из изначального массива, которые в сумме дают num

export default function findPairs (arr, num) {
  const map = new Map();
  for (let idx = 0; idx < arr.length; idx++) {
    const comp = num - arr[idx];

    if (map.has(comp)) {
      return [map.get(comp), idx]
    }

    map.set(arr[idx], idx)
  }
}
