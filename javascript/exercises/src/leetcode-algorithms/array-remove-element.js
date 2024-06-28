/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  const result = nums.filter(function (num) {
    return num !== val
  })
  // mutate initial array
  nums.splice(0)
  for (const num of result) {
    nums.push(num)
  }
  return nums.length
}

const a = [0, 1, 2, 2, 3, 0, 4, 2]
assert.deepEqual(a, [0, 1, 2, 2, 3, 0, 4, 2])
assert.equal(removeDuplicates(a, 2), 5)
assert.deepEqual(a, [0, 1, 3, 0, 4])
