import diffArray from '../diff_arrs'
import { expect } from 'chai'

describe('diffArray', () => {
  it('diff_arrs', () => {
    expect(diffArray([1, 3], [1, 2, 3])).to.be.deep.equal([2])
    expect(diffArray([1, 3, 4], [1, 2, 3])).to.be.deep.equal([2, 4])
  })
})
