import { cockroachSpeed } from "../8-cockroach-speed"

describe("8-cockroach-speed", () => {
  test("basic", () => {
    expect(cockroachSpeed(0)).toBe(0)
    expect(cockroachSpeed(1.08)).toBe(30)
    expect(cockroachSpeed(1.09)).toBe(30)
  })
  test("edge cases", () => {
    expect(cockroachSpeed(2.879988196403384)).toBe(79)
  })
})
