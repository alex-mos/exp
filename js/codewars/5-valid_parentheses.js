function validParentheses(parens){
  let count = 0
  for (let p of parens.split('')) {
    if (p === '(') count++
    if (p === ')') count--
    if (count < 0) return false
  }
  return count === 0
}

assert.equal(validParentheses('()'), true)
assert.equal(validParentheses(')(()))'), false)
assert.equal(validParentheses('('), false)
assert.equal(validParentheses('(())((()())())'), true)
