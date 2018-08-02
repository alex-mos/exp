import test from 'ava'
import Queue from '../queue'

test('Your Queue class should have a enqueue method.', t => {
  let queue = new Queue()
  queue.enqueue('a')
  t.pass()
})

test('Your Queue class should have a dequeue method.', t => {
  let queue = new Queue()
  queue.dequeue
  t.pass()
})

test('Your Queue class should have a front method.', t => {
  let queue = new Queue()
  queue.front()
  t.pass()
})

test('Your Queue class should have a size method.', t => {
  let queue = new Queue()
  queue.front()
  t.pass()
})

test('Your Queue class should have an isEmpty method.', t => {
  let queue = new Queue()
  queue.isEmpty()
  t.pass()
})

test('The dequeue method should remove and return the front element of the queue', t => {
  let queue = new Queue()
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  t.is(queue.dequeue(), 'a')
})

test('The front method should return value of the front element of the queue', t => {
  let queue = new Queue()
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  t.is(queue.front(), 'a')
})

test('The size method should return the length of the queue', t => {
  let queue = new Queue()
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  t.is(queue.size(), 3)
})

test('The isEmpty method should return false if there are elements in the queue', t => {
  let queue = new Queue()
  t.is(queue.isEmpty(), true)
  queue.enqueue('a')
  queue.enqueue('b')
  t.is(queue.isEmpty(), false)
})
