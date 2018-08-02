import diffArray from '../diff_arrs'
import test from 'ava'

test('diff_arrs', async t => {
  t.deepEqual(diffArray([1, 3], [1, 2, 3]), [2])
  t.deepEqual(diffArray([1, 3, 4], [1, 2, 3]), [2, 4])
})
