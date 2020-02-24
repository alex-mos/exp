import {assert} from 'chai'
import {G964} from '../5_caesarsCipher1'

describe('caesarsCipher G964', () => {
  it('movingShift, demovingShift by 1', () => {
    const initial = 'I should have known that you would have a perfect answer for me!!!'
    const coded = ['J vltasl rlhr ', 'zdfog odxr ypw', ' atasl rlhr p ', 'gwkzzyq zntyhv', ' lvz wp!!!']
    assert.deepEqual(G964.movingShift(initial, 1), coded)
    assert.equal(G964.demovingShift(coded, 1), initial)
  })

  it('movingShift, demovingShift by 111', () => {
    const initial = 'I should have known that you would have a perfect answer for me!!!'
    const coded = G964.movingShift(initial, 111)
    assert.equal(G964.demovingShift(coded, 111), initial)
  })
})
