import { Queue } from "../queue"

describe("Queue", () => {
  test("Your Queue class should have a enqueue method.", () => {
    let queue = new Queue()
    expect(queue.enqueue).toBeDefined()
  })

  test("Your Queue class should have a dequeue method.", () => {
    let queue = new Queue()
    expect(queue.dequeue).toBeDefined()
  })

  test("Your Queue class should have a front method.", () => {
    let queue = new Queue()
    expect(queue.front).toBeDefined()
  })

  test("Your Queue class should have a size method.", () => {
    let queue = new Queue()
    expect(queue.front).toBeDefined()
  })

  test("Your Queue class should have an isEmpty method.", () => {
    let queue = new Queue()
    expect(queue.isEmpty).toBeDefined()
  })

  test("The dequeue method should remove and return the front element of the queue", () => {
    let queue = new Queue()
    queue.enqueue("a")
    queue.enqueue("b")
    queue.enqueue("c")
    expect(queue.dequeue()).toBe("a")
  })

  test("The front method should return value of the front element of the queue", () => {
    let queue = new Queue()
    queue.enqueue("a")
    queue.enqueue("b")
    queue.enqueue("c")
    expect(queue.front()).toBe("a")
  })

  test("The size method should return the length of the queue", () => {
    let queue = new Queue()
    queue.enqueue("a")
    queue.enqueue("b")
    queue.enqueue("c")
    expect(queue.size()).toBe(3)
  })

  test("The isEmpty method should return false if there are elements in the queue", () => {
    let queue = new Queue()
    expect(queue.isEmpty()).toBe(true)
    queue.enqueue("a")
    queue.enqueue("b")
    expect(queue.isEmpty()).toBe(false)
  })
})
