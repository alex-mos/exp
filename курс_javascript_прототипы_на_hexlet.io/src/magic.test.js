import magic from "./magic"

describe("magic", () => {
  test("empty", () => {
    expect(magic()).toBe(0)
  })

  test("one call", () => {
    expect(magic(5, 2, -8)).toBe(-1)
  })

  test("four calls 1", () => {
    expect(magic(1, 2)(3, 4, 5)(6)(7, 10)).toBe(38)
  })

  test("four calls 2", () => {
    expect(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2)).toBe(13)
  })

  test.skip("empty call in the middle", () => {
    expect(magic(1, 2)(3)()(4)).toBe(6) // выполнение закончится на 6.
  })
})
