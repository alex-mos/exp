/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function hasPair(nums, target) {
  const indexedNums = {}
  for (let i = 0; i < nums.length; i++) {
    if (indexedNums[target - nums[i]] !== undefined) {
      return true
    }
    indexedNums[nums[i]] = i
    if (nums[i] > target) return false
  }
};


// assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1])
assert.equal(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 3), false)
assert.equal(hasPair([1, 5, 6, 9, 10, 14, 16, 20, 27, 30], 36), true)
assert.equal(hasPair([18, 18], 36), true)
assert.equal(hasPair([0, 36], 36), true)
