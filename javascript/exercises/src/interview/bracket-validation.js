// Validate bracket sequence with single bracket types: ()

export function isBracketSequenceValid(bracketSequence) {
  let count = 0

  for (let bracket of bracketSequence) {
    if (bracket === "(") count++
    if (bracket === ")") count--
    if (count < 0) break
  }

  return count === 0
}
