import "../wrap"

describe("wrap", () => {
  test("Mary, Kate", () => {
    function speak(name) {
      return `Hello ${name}`
    }

    const newSpeak = speak.wrap((original, yourName, myName) => {
      const greeting = original(yourName)
      return `${greeting}, my name is ${myName}`
    })

    expect(newSpeak("Mary", "Kate")).toBe("Hello Mary, my name is Kate")
  })

  test("2, 3", () => {
    function multiply(x, y) {
      return x * y
    }

    const quad = multiply.wrap((original, x, y) => {
      const multiplied = original(x, y)
      return multiplied * 4
    })

    expect(multiply(2, 3)).toBe(6)
    expect(quad(2, 3)).toBe(24)
  })
})
