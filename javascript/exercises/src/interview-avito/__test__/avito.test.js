import { findPairs } from "../avito"

describe("find pairs avito interview task", () => {
  test("basic test", () => {
    expect(findPairs([2, 3, 4, 0, 5], 5)).toEqual([
      [2, 3],
      [0, 5],
    ])
  })
})
