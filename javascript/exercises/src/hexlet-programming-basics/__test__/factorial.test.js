import { factorial } from "../factorial"

describe("factorial", () => {
  test("0", () => {
    expect(factorial(0)).toBe(1)
  })
  test("5", () => {
    expect(factorial(5)).toBe(120)
  })
})
