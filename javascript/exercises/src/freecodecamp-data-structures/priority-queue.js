export class PriorityQueue {
  constructor() {
    this.collection = []
  }

  enqueue(item) {
    this.collection.push(item)
  }

  dequeue() {
    const sortedCollection = this.collection.sort((a, b) => a[1] - b[1])
    return sortedCollection[0] ? sortedCollection.shift()[0] : undefined
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
