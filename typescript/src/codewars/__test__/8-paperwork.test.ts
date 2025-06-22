import { paperwork } from "../8-paperwork"

describe("8-paperwork", () => {
  test("5 * 5", () => {
    expect(paperwork(5, 5)).toBe(25)
  })
  test("classmates are less than zero", () => {
    expect(paperwork(-5, 5)).toBe(0)
  })
  test("pages are less than zero", () => {
    expect(paperwork(5, -5)).toBe(0)
  })
})
