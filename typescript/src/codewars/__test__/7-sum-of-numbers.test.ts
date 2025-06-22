import { getSum } from "../7-sum-of-numbers"

describe("7-sum-of-numbers", () => {
  test("1, 0", () => {
    expect(getSum(1, 0)).toBe(1)
  })
  test("1, 2", () => {
    expect(getSum(1, 2)).toBe(3)
  })
  test("0, 1", () => {
    expect(getSum(0, 1)).toBe(1)
  })
  test("1, 1", () => {
    expect(getSum(1, 1)).toBe(1) // 1 since both are same
  })
  test("-1, 0", () => {
    expect(getSum(-1, 0)).toBe(-1)
  })
  test("0, -1", () => {
    expect(getSum(0, -1)).toBe(-1)
  })
  test("-1, 2", () => {
    expect(getSum(-1, 2)).toBe(2) // -1 + 0 + 1 + 2 = 2
  })
  test("-5, 5", () => {
    expect(getSum(-5, 5)).toBe(0)
  })
  test("-5, 0", () => {
    expect(getSum(-5, 0)).toBe(-15)
  })
  test("-5, -1", () => {
    expect(getSum(-5, -1)).toBe(-15)
  })
  test("0, 5", () => {
    expect(getSum(0, 5)).toBe(15)
  })
  test("1, 5", () => {
    expect(getSum(1, 5)).toBe(15)
  })
  test("5, 1", () => {
    expect(getSum(5, 1)).toBe(15)
  })
  test("5, 5", () => {
    expect(getSum(5, 5)).toBe(5)
  })
  test("-10, -5", () => {
    expect(getSum(-10, -5)).toBe(-45)
  })
})
