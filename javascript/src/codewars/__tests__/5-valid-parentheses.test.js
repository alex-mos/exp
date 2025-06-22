import { validParentheses } from "../5-valid-parentheses"

describe("5-valid-parentheses", () => {
  test("cases", () => {
    expect(validParentheses("()")).toBe(true)
    expect(validParentheses(")(()))")).toBe(false)
    expect(validParentheses("(")).toBe(false)
    expect(validParentheses("(())((()())())")).toBe(true)
  })
})
