import { isPowerOfThree } from "../is-power-of-three"

describe("is-power-of-three", () => {
  test("main", () => {
    expect(isPowerOfThree(1)).toBe(true) // (3^0)
    expect(isPowerOfThree(2)).toBe(false)
    expect(isPowerOfThree(9)).toBe(true) // (3^2)
    expect(isPowerOfThree(12)).toBe(false)
    expect(isPowerOfThree(15)).toBe(false)
    expect(isPowerOfThree(27)).toBe(true) // (3^3)
  })
})
