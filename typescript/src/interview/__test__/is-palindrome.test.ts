import { isPalindrome } from "../is-palindrome"

describe("is-palindrome", () => {
  test("main", () => {
    expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true)
    expect(isPalindrome("racecar")).toBe(true)
    expect(isPalindrome("hello")).toBe(false)
    expect(isPalindrome("12321")).toBe(true)
    expect(isPalindrome("A Toyota")).toBe(true)
  })
})
