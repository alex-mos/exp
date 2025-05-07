/*
  Validate bracket sequence with multiple bracket types — ()
*/

export function isBracketSequenceValid(bracketSequence) {
  let count = 0
  let result = true

  for (const bracket of bracketSequence) {
    if (bracket === "(") {
      count++
    }
    if (bracket === ")") {
      count--
    }
    if (count < 0) {
      break
    }
  }

  if (count !== 0) {
    result = false
  }

  return result
}
