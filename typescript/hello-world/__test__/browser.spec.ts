import { greeting } from "../src/browser"

describe("browser", () => {
  it("should have correct greeting string", () => {
    expect(greeting).toBe("Hello, world")
  })
})
