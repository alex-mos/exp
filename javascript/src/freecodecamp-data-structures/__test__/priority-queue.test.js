import { PriorityQueue } from "../priority-queue"

describe("PriorityQueue", function () {
  it("PriorityQueue size method", () => {
    let queue = new PriorityQueue()
    expect(queue.size()).toBe(0)
    queue.enqueue(["kitten", 2])
    expect(queue.size()).toBe(1)
    queue.enqueue(["dog", 2])
    expect(queue.size()).toBe(2)
    queue.enqueue(["human", 1])
    expect(queue.size()).toBe(3)
    queue.enqueue(["rabbit", 2])
    expect(queue.size()).toBe(4)
  })

  it("PriorityQueue should return items with a higher priority before items with a lower priority and return items in first-in-first-out order otherwise.", () => {
    let queue = new PriorityQueue()
    queue.enqueue(["kitten", 2])
    queue.enqueue(["dog", 2])
    queue.enqueue(["human", 1])
    queue.enqueue(["rabbit", 2])
    expect(queue.dequeue()).toBe("human")
    expect(queue.dequeue()).toBe("kitten")
    expect(queue.dequeue()).toBe("dog")
    expect(queue.dequeue()).toBe("rabbit")
    expect(queue.dequeue()).toBe(undefined)
  })
})
