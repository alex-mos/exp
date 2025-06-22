import { Singleton } from "../singleton"

describe("singleton", () => {
  test("main", () => {
    expect(new Singleton() === new Singleton()).toBe(true)
  })
})
