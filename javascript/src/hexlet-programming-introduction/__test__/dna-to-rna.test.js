import { dnaToRna } from "../dna-to-rna"

describe("dna-to-rna", () => {
  test("ACGTGGTCTTAA", () => {
    expect(dnaToRna("ACGTGGTCTTAA")).toBe("UGCACCAGAAUU")
  })
  test("CCGTA", () => {
    expect(dnaToRna("CCGTA")).toBe("GGCAU")
  })
  test("empty string", () => {
    expect(dnaToRna("")).toBe("")
  })
  test("ACNTG", () => {
    expect(dnaToRna("ACNTG")).toBe(null)
  })
})
