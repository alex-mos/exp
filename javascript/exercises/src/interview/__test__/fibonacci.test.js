import { fibonacci } from "../fibonacci"

describe("fibonacci", () => {
  test("main", () => {
    expect(fibonacci(3)).toBe(2)
    expect(fibonacci(7)).toBe(13)
    expect(fibonacci(77)).toBe(5527939700884757)
  })
})
