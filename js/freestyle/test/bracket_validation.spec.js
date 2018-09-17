const assert = require('assert')
const isBracketSequenceValid = require('../bracket_validation')

assert(isBracketSequenceValid('()'))
assert(isBracketSequenceValid('()()'))
assert(isBracketSequenceValid('(()())'))
assert(isBracketSequenceValid('(()(()))'))

assert(!isBracketSequenceValid(')('))
assert(!isBracketSequenceValid('))()'))
assert(!isBracketSequenceValid('((())'))
assert(!isBracketSequenceValid('()(()('))
