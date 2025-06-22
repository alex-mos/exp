import "../custom-flat-map"

describe("custom-flat-map", () => {
  test("main", () => {
    const data = [[1, 2], [3], [[4]], 5, [6, 7]]
    const callback = (x) => x.length
    const result = data.customFlatMap(callback)
    const expected = data.flatMap(callback)

    expect(result).toEqual(expected)
  })

  test("empty", () => {
    expect([].customFlatMap((item) => item)).toEqual([])
  })
})
