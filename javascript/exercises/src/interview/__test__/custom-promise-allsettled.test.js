import { customPromiseAllSettled } from "../custom-promise-allsettled"

describe("custom-promise-allsettled", () => {
  test("main", async () => {
    const result = await customPromiseAllSettled([
      Promise.resolve(5),
      Promise.reject("rejection reason"),
    ])

    expect(result).toEqual([5, "rejection reason"])
  })
})
