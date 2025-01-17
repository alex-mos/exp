import { isBracketSequenceValid } from "../bracket-validation"

describe("isBracketSequenceValid", () => {
  test("basic test", () => {
    expect(isBracketSequenceValid("()")).toBe(true)
    expect(isBracketSequenceValid("()()")).toBe(true)
    expect(isBracketSequenceValid("(()())")).toBe(true)
    expect(isBracketSequenceValid("(()(()))")).toBe(true)

    expect(isBracketSequenceValid(")(")).toBe(false)
    expect(isBracketSequenceValid("))()")).toBe(false)
    expect(isBracketSequenceValid("((())")).toBe(false)
    expect(isBracketSequenceValid("()(()(")).toBe(false)
  })
})
