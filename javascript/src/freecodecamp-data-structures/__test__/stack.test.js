import { Stack } from "../stack"

describe("Stack", () => {
  test("Stack class should have a push method", () => {
    const stack = new Stack()
    expect(stack.push).toBeDefined()
  })

  test("Stack class should have a pop method", () => {
    const stack = new Stack()
    expect(stack.pop).toBeDefined()
  })

  test("Stack class should have a peek method", () => {
    const stack = new Stack()
    expect(stack.peek).toBeDefined()
  })

  test("Stack class should have a isEmpty method", () => {
    const stack = new Stack()
    expect(stack.isEmpty).toBeDefined()
  })

  test("Stack class should have a clear method.", () => {
    const stack = new Stack()
    expect(stack.clear).toBeDefined()
  })

  test("The peek method should return the top element of the stack", () => {
    const stack = new Stack()
    stack.push("a")
    stack.push("b")
    expect(stack.peek()).toBe("b")
  })

  test("The pop method should remove and return the top element of the stack", () => {
    const stack = new Stack()
    stack.push("a")
    stack.push("b")
    expect(stack.pop()).toBe("b")
  })

  test("The isEmpty method should return true if a stack does not contain any elements", () => {
    const stack = new Stack()
    expect(stack.isEmpty()).toBe(true)
    stack.push("a")
    expect(stack.isEmpty()).toBe(false)
    stack.clear()
    expect(stack.isEmpty()).toBe(true)
    stack.push("a")
    stack.push("b")
    stack.pop()
    stack.pop()
    expect(stack.isEmpty()).toBe(true)
  })

  test("The clear method should remove all element from the stack", () => {
    const stack = new Stack()
    stack.push("a")
    stack.push("b")
    stack.clear()
    expect(stack.length).toBe(0)
    expect(stack.isEmpty()).toBe(true)
  })

  test("stack length", () => {
    const stack = new Stack()
    stack.push("a")
    stack.push("b")
    expect(stack.length).toBe(2)
  })
})
