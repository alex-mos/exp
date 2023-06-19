import CircularQueue from '../circular_queue'
import { expect } from 'chai';

describe('CircularQueue', function() {
  it('After an item is dequeued its position in the queue should be reset to null.', () => {
    let queue = new CircularQueue(3)
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    expect(queue.dequeue()).to.be.equal('a')
    expect(queue.dequeue()).to.be.equal('b')
    expect(queue.dequeue()).to.be.equal('c')
    expect(queue.dequeue()).to.be.equal(null)
  })

  it('You cannot enqueue items past the read pointer.', () => {
    let queue = new CircularQueue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    expect(queue.dequeue()).to.be.equal(1)
  })
})
