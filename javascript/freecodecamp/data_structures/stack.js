module.exports = class Stack {
  constructor() {
    this.stack = []
  }
  push(item) {
    this.stack.push(item)
  }
  pop() {
    return this.stack.pop()
  }
  clear() {
    this.stack = []
  }
  peek() {
    return this.stack[this.stack.length - 1]
  }
  isEmpty() {
    return this.stack.length === 0
  }
  get length() {
    return this.stack.length
  }
}
