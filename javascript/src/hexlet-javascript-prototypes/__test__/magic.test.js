import magic from "../magic"

describe("magic", () => {
  test("empty", () => {
    expect(magic() == 0).toBe(true)
  })

  test("one call", () => {
    expect(magic(5, 2, -8) == -1).toBe(true)
  })

  test("four calls 1", () => {
    expect(magic(1, 2)(3, 4, 5)(6)(7, 10) == 38).toBe(true)
  })

  test("four calls 2", () => {
    expect(magic(4, 8, 1, -1, -8)(3)(-3)(7, 2) == 13).toBe(true)
  })

  test("empty call in the middle", () => {
    expect(magic(1, 2)(3)()(4) == 10).toBe(true)
  })
})
