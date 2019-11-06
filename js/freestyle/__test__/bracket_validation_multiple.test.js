import isBracketSequenceValid from '../bracket_validation_multiple'
import { expect } from 'chai'

describe('isBracketSequenceValid', () => {
  it('basic test', () => {
    expect(isBracketSequenceValid('()')).to.be.true
    expect(isBracketSequenceValid('()()')).to.be.true
    expect(isBracketSequenceValid('(()())')).to.be.true
    expect(isBracketSequenceValid('(()(()))')).to.be.true

    expect(isBracketSequenceValid(')(')).to.be.false
    expect(isBracketSequenceValid('))()')).to.be.false
    expect(isBracketSequenceValid('((())')).to.be.false
    expect(isBracketSequenceValid('()(()(')).to.be.false

    expect(isBracketSequenceValid('[{()}]')).to.be.true
    expect(isBracketSequenceValid('[]({}){}()')).to.be.true

    expect(isBracketSequenceValid('[{(}])')).to.be.false
    expect(isBracketSequenceValid('[{(>>>')).to.be.false
    expect(isBracketSequenceValid('[}{]')).to.be.false
    expect(isBracketSequenceValid('{{)]')).to.be.false
    expect(isBracketSequenceValid('(){()')).to.be.false

    expect(isBracketSequenceValid('function validation(string) { console.log(string) }')).to.be.true
    expect(isBracketSequenceValid('function validation(string) { console.log(string)')).to.be.false
  })
})
