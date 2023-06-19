const { isIntArray } = require("../src/6-is_int_array.js")

describe("6-is_int_array", () => {
  it("basic", () => {
    expect(isIntArray([1, 2, 3, 4])).toBe(true)
    expect(isIntArray([1, 2, 3, NaN])).toBe(false)
    expect(isIntArray([])).toBe(true)
  })
})
