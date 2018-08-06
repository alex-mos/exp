import test from 'ava'
import Set from '../set'

test('intersection', t => {
  let s1 = new Set(['a', 'b', 'c'])
  let s2 = new Set(['c', 'd', 'e'])
  t.deepEqual(s1.intersection(s2), ['c'])

  s1 = new Set(['a', 'b', 'c'])
  s2 = new Set(['a', 'b', 'c'])
  t.deepEqual(s1.intersection(s2), ['a', 'b', 'c'])
})

test('difference', t => {
  let s1 = new Set(['a', 'b', 'c'])
  let s2 = new Set(['c', 'd', 'e'])
  t.deepEqual(s1.difference(s2), new Set(['a', 'b', 'd', 'e']))
})

test('subset', t => {
  let s1 = new Set(['a', 'b'])
  let s2 = new Set(['a', 'b', 'c', 'd', 'e'])
  t.is(s1.subset(s2), true)
  s1 = new Set(['a', 'f'])
  s2 = new Set(['a', 'b', 'c', 'd', 'e'])
  t.is(s1.subset(s2), false)
})
