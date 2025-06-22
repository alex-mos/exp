import { smallestDivisor } from "../smallest-divisor"

describe("smallestDivisor", () => {
  test("15", () => {
    expect(smallestDivisor(15)).toBe(3)
  })
  test("17", () => {
    expect(smallestDivisor(17)).toBe(17)
  })
})
