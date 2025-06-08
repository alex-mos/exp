export function isPalindrome(str: string): boolean {
  const normStr = str.replace(/\s|,/g, "").toLowerCase()

  for (let i = 0; i < normStr.length; i++) {
    if (normStr[i] !== normStr[normStr.length - 1 - i]) {
      return false
    }
  }

  return true
}
