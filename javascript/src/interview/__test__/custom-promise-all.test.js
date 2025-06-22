import "../custom-promise-all"

describe("custom-promise-all", () => {
  test("main", async () => {
    const result = Promise.customAll([
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("promise1")
        }, 120)
      }),
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("promise2")
        }, 150)
      }),
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("promise3")
        }, 100)
      }),
    ])

    expect(await result).toEqual(["promise1", "promise2", "promise3"])
  })

  test("empty", async () => {
    const result = Promise.customAll([])

    expect(await result).toEqual([])
  })
})
