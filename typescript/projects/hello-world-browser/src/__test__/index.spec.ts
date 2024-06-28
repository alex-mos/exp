import { greeting } from "../src/index"

describe("index", () => {
  it("should have correct greeting string", () => {
    expect(greeting).toBe("Hello world")
  })
})
