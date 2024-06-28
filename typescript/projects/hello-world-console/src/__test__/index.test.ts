import { greeting } from "../index"

describe("console", () => {
  it("should have correct greeting string", () => {
    expect(greeting).toBe("Hello world")
  })
})
