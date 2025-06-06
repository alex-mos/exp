import { longestConsecutive } from "../longest-consecutive-sequence"

describe("longest-consecutive-sequence", () => {
  test.skip("main", () => {
    expect(longestConsecutive([100, 4, 200, 1, 3, 2])).toBe(4)
    expect(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])).toBe(9)
    expect(longestConsecutive([1, 0, 1, 2])).toBe(3)
  })
})
