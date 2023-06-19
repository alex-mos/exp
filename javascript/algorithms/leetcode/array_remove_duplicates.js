/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
  const uniqNums = nums.filter(function(num, index) {
    return !nums.slice(index + 1).includes(num)
  })
  // mutate initial array
  nums.splice(0)
  for (const num of uniqNums) {
    nums.push(num)
  }
  return nums.length
}

const a = [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4]
assert.deepEqual(a, [0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 4])
assert.equal(removeDuplicates(a), 5)
assert.deepEqual(a, [0, 1, 2, 3, 4])
