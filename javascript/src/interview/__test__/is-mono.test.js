import { isMono } from "../is-mono"

describe("is-mono", () => {
  test("main", () => {
    expect(isMono([1, 2, 3])).toBe(true)
    expect(isMono([6, 3, 2, 1])).toBe(true)
    expect(isMono([5, 5])).toBe(true)
    expect(isMono([1, 2, 5, 5, 5, 8, 9])).toBe(true)
    expect(isMono([1, 2, 5, 5, 5, 2, 1])).toBe(false)
    expect(isMono([1, 10, 6])).toBe(false)
    expect(isMono([5, 5, 5, 1])).toBe(true)
    expect(isMono([1])).toBe(true)
  })
})
