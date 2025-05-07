import { isBracketSequenceValid } from "../bracket-validation-multiple"

describe("isBracketSequenceValid", () => {
  it("main", () => {
    expect(isBracketSequenceValid("()")).toBe(true)
    expect(isBracketSequenceValid("()()")).toBe(true)
    expect(isBracketSequenceValid("(()())")).toBe(true)
    expect(isBracketSequenceValid("(()(()))")).toBe(true)

    expect(isBracketSequenceValid(")(")).toBe(false)
    expect(isBracketSequenceValid("))()")).toBe(false)
    expect(isBracketSequenceValid("((())")).toBe(false)
    expect(isBracketSequenceValid("()(()(")).toBe(false)

    expect(isBracketSequenceValid("[{()}]")).toBe(true)
    expect(isBracketSequenceValid("[]({}){}()")).toBe(true)

    expect(isBracketSequenceValid("[{(}])")).toBe(false)
    expect(isBracketSequenceValid("[{(>>>")).toBe(false)
    expect(isBracketSequenceValid("[}{]")).toBe(false)
    expect(isBracketSequenceValid("{{)]")).toBe(false)
    expect(isBracketSequenceValid("(){()")).toBe(false)

    expect(
      isBracketSequenceValid(
        "function validation(string) { console.log(string) }",
      ),
    ).toBe(true)

    expect(
      isBracketSequenceValid(
        "function validation(string) { console.log(string)",
      ),
    ).toBe(false)
  })
})
