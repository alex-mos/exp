import { factorialCycle } from "../factorial"
import { factorialRecursion } from "../factorial"
import { factorial2 } from "../factorial"
import { factorial3 } from "../factorial"

describe("factorial", () => {
  test("factorialCycle", () => {
    expect(factorialCycle(0)).toBe(1)
    expect(factorialCycle(1)).toBe(1)
    expect(factorialCycle(5)).toBe(120)
  })

  test("factorialRecursion", () => {
    expect(factorialRecursion(0)).toBe(1)
    expect(factorialRecursion(1)).toBe(1)
    expect(factorialRecursion(5)).toBe(120)
  })

  test("factorial2", () => {
    expect(factorial2(0)).toBe(1)
    expect(factorial2(1)).toBe(1)
    expect(factorial2(5)).toBe(120)
  })

  test("factorial3", () => {
    expect(factorial3(0)).toBe(1)
    expect(factorial3(1)).toBe(1)
    expect(factorial3(5)).toBe(120)
  })
})
