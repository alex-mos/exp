function validBraces(str) {
  const braces = {
    "(": ")",
    "{": "}",
    "[": "]",
  }
  const stack = []
  for (const brace of str.split("")) {
    // opening braces
    if (Object.keys(braces).includes(brace)) stack.push(brace)
    // closing braces
    if (Object.values(braces).includes(brace)) {
      const prevBrace = stack.pop()
      if (!prevBrace) return false
      if (braces[prevBrace] !== brace) return false
    }
  }
  return stack.length === 0
}

assert.equal(validBraces("(){}[]"), true)
assert.equal(validBraces("(}"), false)
assert.equal(validBraces("[(])"), false)
assert.equal(validBraces("([{}])"), true)
