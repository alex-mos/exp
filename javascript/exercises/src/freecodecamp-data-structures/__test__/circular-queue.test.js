import { CircularQueue } from "../circular-queue"

describe("CircularQueue", function () {
  test("After an item is dequeued its position in the queue should be reset to null.", () => {
    let queue = new CircularQueue(3)
    queue.enqueue("a")
    queue.enqueue("b")
    queue.enqueue("c")
    expect(queue.dequeue()).toBe("a")
    expect(queue.dequeue()).toBe("b")
    expect(queue.dequeue()).toBe("c")
    expect(queue.dequeue()).toBe(null)
  })

  test("You cannot enqueue items past the read pointer.", () => {
    let queue = new CircularQueue(3)
    queue.enqueue(1)
    queue.enqueue(2)
    queue.enqueue(3)
    queue.enqueue(4)
    expect(queue.dequeue()).toBe(1)
  })
})
