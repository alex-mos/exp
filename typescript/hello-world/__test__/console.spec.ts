import { greeting } from "../src/console"

describe("console", () => {
  it("should have correct greeting string", () => {
    expect(greeting).toBe("Hello, world")
  })
})
