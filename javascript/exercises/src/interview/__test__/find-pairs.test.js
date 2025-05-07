import { findPairs } from "../find-pairs"

describe("find pairs", () => {
  test("main", () => {
    expect(findPairs([2, 3, 4, 0, 5], 5)).toEqual([
      [2, 3],
      [0, 5],
    ])
  })
})
