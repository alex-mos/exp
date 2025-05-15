import "../custom-bind"
  
describe("custom-bind", () => {
  test("main", () => {
    function sayHello(x) {
      return `Hello, ${this}! Could you please lend me ${x} dollars?`
    }
    const name = "Arnold"
    const helloName = sayHello.customBind(name)

    expect(helloName(15)).toBe("Hello, Arnold! Could you please lend me 15 dollars?")
  })
})
