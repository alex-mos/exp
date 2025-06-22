import { ownGet } from "../own-get"

describe("own-get", () => {
  test("main", () => {
    const obj = { a: { b: { c: 777 } } }

    expect(ownGet(obj, "a.b.c")).toBe(777)
    expect(ownGet(obj, "a.d")).toBe(null)
  })
})
