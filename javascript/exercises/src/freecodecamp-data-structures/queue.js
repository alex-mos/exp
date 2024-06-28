export class Queue {
  constructor() {
    this.collection = []
  }

  enqueue(item) {
    this.collection.push(item)
  }

  dequeue() {
    return this.collection.shift()
  }

  front() {
    return this.collection[0]
  }

  size() {
    return this.collection.length
  }

  isEmpty() {
    return this.collection.length === 0
  }
}
