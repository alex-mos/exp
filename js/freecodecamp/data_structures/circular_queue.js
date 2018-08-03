class CircularQueue {
  constructor(size) {
    this.queue = []
    this.read = 0
    this.write = 0
    this.max = size - 1

    while (size > 0) {
      this.queue.push(null)
      size--
    }
  }
  print() {
    return this.queue
  }
  enqueue(item) {
    if (!this.queue[this.write]) {
      this.queue[this.write] = item

      if (this.write <= this.max) {
        this.write++
      } else {
        this.write = 0
      }
    }
    return item
  }
  dequeue() {
    if (this.queue[this.read]) {
      let result = this.queue[this.read]
      this.queue[this.read] = null

      if (this.read <= this.max) {
        this.read++
      } else {
        this.read = 0
      }
      return result
    }
    return null
  }
}

module.exports = CircularQueue