import { customPromiseRace } from "../custom-promise-race"

describe("custom-promise-race", () => {
  test("main", async () => {
    const result = await customPromiseRace([
      new Promise((resolve) => setTimeout(() => resolve("1"), 120)),
      new Promise((resolve, reject) => setTimeout(() => reject("2"), 150)),
      new Promise((resolve) => setTimeout(() => resolve("3"), 100)),
    ])

    expect(result).toBe("3")
  })

  test("error", async () => {
    try {
      const result = await customPromiseRace([
        new Promise((resolve) => setTimeout(() => resolve("1"), 120)),
        new Promise((resolve, reject) => setTimeout(() => reject("2"), 70)),
        new Promise((resolve) => setTimeout(() => resolve("3"), 100)),
      ])
    } catch (error) {
      expect(error).toBe("2")
    }
  })
})
