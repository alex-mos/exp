const assert = require('assert')
const isBracketSequenceValid = require('../bracket_validation_multiple')

assert(isBracketSequenceValid('()'))
assert(isBracketSequenceValid('()()'))
assert(isBracketSequenceValid('(()())'))
assert(isBracketSequenceValid('(()(()))'))

assert(!isBracketSequenceValid(')('))
assert(!isBracketSequenceValid('))()'))
assert(!isBracketSequenceValid('((())'))
assert(!isBracketSequenceValid('()(()('))

assert(isBracketSequenceValid('[{()}]'))
assert(isBracketSequenceValid('[]({}){}()'))

assert(!isBracketSequenceValid('[{(}])'))
assert(!isBracketSequenceValid('[{(>>>'))
assert(!isBracketSequenceValid('[}{]'))
assert(!isBracketSequenceValid('{{)]'))
assert(!isBracketSequenceValid('(){()'))

assert(isBracketSequenceValid('function validation(string) { console.log(string) }'))
assert(!isBracketSequenceValid('function validation(string) { console.log(string)'))