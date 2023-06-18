const { validParentheses } = require("../src/5-valid_parentheses")

describe("5-valid_parentheses", () => {
  it("cases", () => {
    expect(validParentheses('()')).toBe(true)
    expect(validParentheses(')(()))')).toBe(false)
    expect(validParentheses('(')).toBe(false)
    expect(validParentheses('(())((()())())')).toBe(true)
  })
})
