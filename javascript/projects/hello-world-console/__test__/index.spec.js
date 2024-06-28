const { greeting } = require("../index")

describe("index", () => {
  it("greeting string is valid", () => {
    expect(greeting).toBe("Hello world")
  })
})
