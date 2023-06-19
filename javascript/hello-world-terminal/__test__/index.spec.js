import { greeting } from "greeting"

describe("index", () => {
  it("greeting string is valid", () => {
    expect(greeting).toBe("Hello wordd")
  })
})
