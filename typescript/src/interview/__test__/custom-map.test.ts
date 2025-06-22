import "../custom-map"

describe("custom-map", () => {
  test("number to number", () => {
    const data = [1, 3, 6]
    const expected = [2, 6, 12]
    expect(data.customMap(item => item * 2)).toEqual(expected)
  })

  test("number to string", () => {
    const data = [1, 3, 6]
    const expected = ["2", "6", "12"]
    expect(data.customMap(item => String(item * 2))).toEqual(expected)
  })
})
