import { withoutTwoZeros } from "./without-two-zeros"

describe("withoutTwoZeros", () => {
  test("2, 2", () => {
    expect(withoutTwoZeros(2, 2)).toBe(3)
  })
  test("1, 1", () => {
    expect(withoutTwoZeros(1, 1)).toBe(2)
  })
  test("1, 3", () => {
    expect(withoutTwoZeros(1, 3)).toBe(4)
  })
  test("2, 4", () => {
    expect(withoutTwoZeros(2, 4)).toBe(10)
  })
  test("3, 0", () => {
    // Если в наборе одни нули, нет ни одного способа
    expect(withoutTwoZeros(3, 0)).toBe(0)
  })
  test("0, 3", () => {
    // Если в наборе только единицы, то есть только один способ
    expect(withoutTwoZeros(0, 3)).toBe(1)
  })
})
