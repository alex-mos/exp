import { diffArray } from "../diff-arrays"

describe("diff-arrays", () => {
  test("cases", () => {
    expect(diffArray([1, 3], [1, 2, 3])).toEqual([2])
    expect(diffArray([1, 3, 4], [1, 2, 3])).toEqual([2, 4])
  })
})
