function validParentheses(parens) {
  let count = 0
  for (const p of parens.split('')) {
    if (p === '(') count++
    if (p === ')') count--
    if (count < 0) return false
  }
  return count === 0
}

module.exports = {
  validParentheses
}
