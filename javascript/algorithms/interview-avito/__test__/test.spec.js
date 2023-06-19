import findPairs_alex_mospan from '../avito_alex_mospan'
import findPairs_max_axenov from '../avito_max_axenov'
import { expect } from 'chai'

describe('find pairs avito interview task', () => {
  it('basic test alex_mospan', () => {
    expect(findPairs_alex_mospan([2, 3, 4, 0, 5], 5)).to.be.deep.equal([[2, 3], [0, 5]])
  })
  it('basic test max_axenov', () => {
    expect(findPairs_max_axenov([2, 3, 4, 0, 5], 5)).to.be.deep.equal([[2, 3], [0, 5]])
  })
})
