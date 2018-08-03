import test from 'ava'
import CircularQueue from '../circular_queue'

test('After an item is dequeued its position in the queue should be reset to null.', t => {
  let queue = new CircularQueue(3)
  queue.enqueue('a')
  queue.enqueue('b')
  queue.enqueue('c')
  t.is(queue.dequeue(), 'a')
  t.is(queue.dequeue(), 'b')
  t.is(queue.dequeue(), 'c')
  t.is(queue.dequeue(), null)
})

test('You cannot enqueue items past the read pointer.', t => {
  let queue = new CircularQueue(3)
  queue.enqueue(1)
  queue.enqueue(2)
  queue.enqueue(3)
  queue.enqueue(4)
  t.is(queue.dequeue(), 1)
})
