const sort = (arr) => {
  let i

  for (let j = 1; j < arr.length; j++) {
    i = j - 1
    while (i > 0 && arr[i] > arr[j]) {
      arr[i + 1] = arr[i]
    }
    arr[i + 1] = arr[j]
  }

  return arr
}

assert.deepEqual(sort([3, 1, 2]), [1, 2, 3])
assert.deepEqual(sort([3, 4, 1, 2]), [1, 2, 3, 4])
