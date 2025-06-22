import { fizzbuzz } from "../fizzbuzz"

describe("fizzbuzz", () => {
  test("main", () => {
    expect(fizzbuzz(3)).toBe("Fizz")
    expect(fizzbuzz(5)).toBe("Buzz")
    expect(fizzbuzz(15)).toBe("FizzBuzz")
    expect(fizzbuzz(31)).toBe(31)
  })
})
