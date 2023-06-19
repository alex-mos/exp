const sort = (arr) => {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - 1; i++) {
      let temp
      if (arr[i] > arr[i + 1]) {
        temp = arr[i + 1]
        arr[i + 1] = arr[i]
        arr[i] = temp
      }
    }
  }
  return arr
}

assert.strict.deepEqual(sort([3, 1, 2]), [1, 2, 3])
assert.strict.deepEqual(sort([3, 4, 1, 2]), [1, 2, 3, 4])
