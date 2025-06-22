import { mango } from "../8-price-of-mangoes"

describe("8-price-of-mangoes", () => {
  test("cases", () => {
    expect(mango(3, 3)).toBe(6)
    expect(mango(9, 5)).toBe(30)
    expect(mango(5, 1)).toBe(4)
    expect(mango(5, 2)).toBe(8)
  })
})
