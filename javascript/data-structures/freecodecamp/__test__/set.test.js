import Set from '../set'
import { expect } from 'chai';

describe('Set', () => {
  it('intersection', () => {
    let s1 = new Set(['a', 'b', 'c'])
    let s2 = new Set(['c', 'd', 'e'])
    expect(s1.intersection(s2)).to.be.deep.equal(['c'])

    s1 = new Set(['a', 'b', 'c'])
    s2 = new Set(['a', 'b', 'c'])
    expect(s1.intersection(s2)).to.be.deep.equal(['a', 'b', 'c'])
  })

  it('difference', () => {
    let s1 = new Set(['a', 'b', 'c'])
    let s2 = new Set(['c', 'd', 'e'])
    expect(s1.difference(s2)).to.be.deep.equal(new Set(['a', 'b', 'd', 'e']))
  })

  it('subset', () => {
    let s1 = new Set(['a', 'b'])
    let s2 = new Set(['a', 'b', 'c', 'd', 'e'])
    expect(s1.subset(s2)).to.be.true
    s1 = new Set(['a', 'f'])
    s2 = new Set(['a', 'b', 'c', 'd', 'e'])
    expect(s1.subset(s2)).to.be.false
  })
})
