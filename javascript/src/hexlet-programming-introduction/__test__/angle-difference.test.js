import { diff } from "../angle-difference"

describe("angle-difference", () => {
  test("basic", () => {
    expect(diff(0, 45)).toBe(45) // не 315, а 45, потому что 45 меньше
    expect(diff(0, 180)).toBe(180)
    expect(diff(0, 190)).toBe(170) // не 190, а 170, потому что 170 меньше
    expect(diff(120, 280)).toBe(160)
  })
})
