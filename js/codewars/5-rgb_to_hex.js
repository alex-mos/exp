function rgb(r, g, b) {
  return decimalToHex(r) + decimalToHex(g) + decimalToHex(b)
}

function decimalToHex(num) {
  if (num < 0) return '00'
  if (num > 255) return 'FF'
  const letters = 'ABCDEF'
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

assert.equal(decimalToHex(0), '00')
assert.equal(decimalToHex(9), '09')
assert.equal(decimalToHex(10), '0A')
assert.equal(decimalToHex(11), '0B')
assert.equal(decimalToHex(16), '10')
assert.equal(decimalToHex(26), '1A')
assert.equal(decimalToHex(211), 'D3')
assert.equal(rgb(255, 255, 255), 'FFFFFF')
assert.equal(rgb(148, 0, 211), '9400D3')
assert.equal(rgb(0, 0, -20), '000000')
assert.equal(rgb(300, 255, 255), 'FFFFFF')
