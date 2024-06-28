import { isIntArray } from "../6-is-int-array.js"

describe("6-is-int-array", () => {
  test("basic", () => {
    expect(isIntArray([1, 2, 3, 4])).toBe(true)
    expect(isIntArray([1, 2, 3, NaN])).toBe(false)
    expect(isIntArray([])).toBe(true)
  })
})
