// Validate bracket sequence with multiple bracket types: [<{()}>]

export function isBracketSequenceValid(str) {
  let openingBrackets = {
    "(": ")",
    "[": "]",
    "{": "}",
    "<": ">",
  }

  let closingBrackets = {
    ")": "(",
    "]": "[",
    "}": "{",
    ">": "<",
  }

  let stack = []

  for (let char of str) {
    if (openingBrackets[char]) {
      stack.push(char)
    }

    if (closingBrackets[char]) {
      if (!(closingBrackets[char] === stack.pop())) {
        return false
      }
    }
  }

  return stack.length === 0
}
