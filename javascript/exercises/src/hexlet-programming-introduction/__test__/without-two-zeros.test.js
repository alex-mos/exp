import { withoutTwoZeros } from "../without-two-zeros"

describe("without-two-zeros", () => {
  test.skip("2, 2", () => {
    expect(withoutTwoZeros(2, 2)).toBe(3)
  })
  test.skip("1, 1", () => {
    expect(withoutTwoZeros(1, 1)).toBe(2)
  })
  test.skip("1, 3", () => {
    expect(withoutTwoZeros(1, 3)).toBe(4)
  })
  test.skip("2, 4", () => {
    expect(withoutTwoZeros(2, 4)).toBe(10)
  })
  test.skip("3, 0", () => {
    // Если в наборе одни нули, нет ни одного способа
    expect(withoutTwoZeros(3, 0)).toBe(0)
  })
  test.skip("0, 3", () => {
    // Если в наборе только единицы, то есть только один способ
    expect(withoutTwoZeros(0, 3)).toBe(1)
  })
})
