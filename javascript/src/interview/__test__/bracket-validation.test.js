import { isBracketSequenceValid } from "../bracket-validation"

describe("isBracketSequenceValid", () => {
  test("main", () => {
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
