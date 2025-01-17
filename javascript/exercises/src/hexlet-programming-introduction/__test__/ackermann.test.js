import { ackermann } from '../ackermann';

describe("ackermann", () => {
  test("main", () => {
    expect(ackermann(0, 0)).toBe(1)
    expect(ackermann(1, 0)).toBe(2)
    expect(ackermann(2, 1)).toBe(5)
    expect(ackermann(2, 3)).toBe(9)
  })
})
