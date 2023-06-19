import Queue from '../queue'
import { expect } from 'chai';

describe('Queue', () => {
  it('Your Queue class should have a enqueue method.', () => {
    let queue = new Queue()
    expect(queue.enqueue).to.exist
  })

  it('Your Queue class should have a dequeue method.', () => {
    let queue = new Queue()
    expect(queue.dequeue).to.exist
  })

  it('Your Queue class should have a front method.', () => {
    let queue = new Queue()
    expect(queue.front).to.exist
  })

  it('Your Queue class should have a size method.', () => {
    let queue = new Queue()
    expect(queue.front).to.exist
  })

  it('Your Queue class should have an isEmpty method.', () => {
    let queue = new Queue()
    expect(queue.isEmpty).to.exist
  })

  it('The dequeue method should remove and return the front element of the queue', () => {
    let queue = new Queue()
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    expect(queue.dequeue()).to.be.equal('a')
  })

  it('The front method should return value of the front element of the queue', () => {
    let queue = new Queue()
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    expect(queue.front()).to.be.equal('a')
  })

  it('The size method should return the length of the queue', () => {
    let queue = new Queue()
    queue.enqueue('a')
    queue.enqueue('b')
    queue.enqueue('c')
    expect(queue.size()).to.be.equal(3)
  })

  it('The isEmpty method should return false if there are elements in the queue', () => {
    let queue = new Queue()
    expect(queue.isEmpty()).to.be.true
    queue.enqueue('a')
    queue.enqueue('b')
    expect(queue.isEmpty()).to.be.false
  })
})
