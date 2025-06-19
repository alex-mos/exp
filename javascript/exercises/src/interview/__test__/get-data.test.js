import { getData } from "../get-data"

describe("get-data", () => {
  test("main", async () => {
    expect(await getData()).toBe("dummy-order")
  })
})
