import isBracketSequenceValid from '../bracket_validation'
import { expect } from 'chai'

describe('isBracketSequenceValid', () => {
  it ('basic test', () => {
    expect(isBracketSequenceValid('()')).to.be.true
    expect(isBracketSequenceValid('()()')).to.be.true
    expect(isBracketSequenceValid('(()())')).to.be.true
    expect(isBracketSequenceValid('(()(()))')).to.be.true

    expect(isBracketSequenceValid(')(')).to.be.false
    expect(isBracketSequenceValid('))()')).to.be.false
    expect(isBracketSequenceValid('((())')).to.be.false
    expect(isBracketSequenceValid('()(()(')).to.be.false
  })
})
