export default function addDigits(num) {
  if (String(num).length === 1) {
    return num
  }
  return addDigits(
    String(num)
      .split("")
      .map((char) => Number(char))
      .reduce((acc = 0, digit) => acc + digit),
  )
}

assert.equal(addDigits(10), 1)
assert.equal(addDigits(19), 1)
assert.equal(addDigits(38), 2)
assert.equal(addDigits(1259), 8)
