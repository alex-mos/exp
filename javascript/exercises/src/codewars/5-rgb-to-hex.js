export function rgb(r, g, b) {
  return decimalToHex(r) + decimalToHex(g) + decimalToHex(b)
}

export function decimalToHex(num) {
  if (num < 0) {
    return "00"
  }

  if (num > 255) {
    return "FF"
  }

  const letters = "ABCDEF"
  let whole = Math.floor(num / 16)
  let remainder = num % 16

  if (whole > 9) {
    whole = letters[whole - 10]
  }

  if (remainder > 9) {
    remainder = letters[remainder - 10]
  }

  return String(whole) + String(remainder)
}
