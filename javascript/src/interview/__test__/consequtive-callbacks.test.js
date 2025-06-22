import { consequtiveCallbacks } from "../consequtive-callbacks"

describe("consequtive-callbacks", () => {
  test("main", () => {
    consequtiveCallbacks((result) => {
      expect(result).toEqual(["A", "B", "C"])
    })
  })
})
