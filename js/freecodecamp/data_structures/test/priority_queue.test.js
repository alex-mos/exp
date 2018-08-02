import test from 'ava'
import PriorityQueue from '../priority_queue'

test('PriorityQueue size method', t => {
  let queue = new PriorityQueue()
  t.is(queue.size(), 0)
  queue.enqueue(['kitten', 2])
  t.is(queue.size(), 1)
  queue.enqueue(['dog', 2])
  t.is(queue.size(), 2)
  queue.enqueue(['human', 1])
  t.is(queue.size(), 3)
  queue.enqueue(['rabbit', 2])
  t.is(queue.size(), 4)
})

test('PriorityQueue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.', t => {
  let queue = new PriorityQueue()
  queue.enqueue(['kitten', 2])
  queue.enqueue(['dog', 2])
  queue.enqueue(['human', 1])
  queue.enqueue(['rabbit', 2])
  t.is(queue.dequeue(), 'human')
  t.is(queue.dequeue(), 'kitten')
  t.is(queue.dequeue(), 'dog')
  t.is(queue.dequeue(), 'rabbit')
  t.is(queue.dequeue(), undefined)
})
