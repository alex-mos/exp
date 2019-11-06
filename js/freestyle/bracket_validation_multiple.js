// Bracket sequence with multiple bracket type
export default function isBracketSequenceValid(bracketSequence) {
  let openingBrackets = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  }
  let closingBrackets = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  }
  let stack = []

  for (let bracket of bracketSequence) {
    if (openingBrackets[bracket]) {
      stack.push(bracket)
    }
    if (closingBrackets[bracket]) {
      if (!(closingBrackets[bracket] === stack.pop())) {
        return false
      }
    }
  }

  return stack.length === 0
}
