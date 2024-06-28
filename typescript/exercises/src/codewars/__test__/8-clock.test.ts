import { past } from "../8-clock"

describe("8_clock", () => {
  test("zero", () => {
    expect(past(0, 0, 0)).toBe(0)
  })
  test("1 minute, 1 second", () => {
    expect(past(0, 1, 1)).toBe(61000)
  })
  test("1 hour", () => {
    expect(past(1, 0, 0)).toBe(3600000)
  })
  test("1 hour 1 minute, 1 second", () => {
    expect(past(1, 1, 1)).toBe(3661000)
  })
})
