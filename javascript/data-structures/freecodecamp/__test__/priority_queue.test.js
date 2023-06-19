import PriorityQueue from '../priority_queue'
import { expect } from 'chai';

describe('PriorityQueue', function() {
  it('PriorityQueue size method', () => {
    let queue = new PriorityQueue()
    expect(queue.size()).to.be.equal(0)
    queue.enqueue(['kitten', 2])
    expect(queue.size()).to.be.equal(1)
    queue.enqueue(['dog', 2])
    expect(queue.size()).to.be.equal(2)
    queue.enqueue(['human', 1])
    expect(queue.size()).to.be.equal(3)
    queue.enqueue(['rabbit', 2])
    expect(queue.size()).to.be.equal(4)
  })

  it('PriorityQueue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.', () => {
    let queue = new PriorityQueue()
    queue.enqueue(['kitten', 2])
    queue.enqueue(['dog', 2])
    queue.enqueue(['human', 1])
    queue.enqueue(['rabbit', 2])
    expect(queue.dequeue()).to.be.equal('human')
    expect(queue.dequeue()).to.be.equal('kitten')
    expect(queue.dequeue()).to.be.equal('dog')
    expect(queue.dequeue()).to.be.equal('rabbit')
    expect(queue.dequeue()).to.be.equal(undefined)
  })
})
