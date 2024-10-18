import { Percolation } from "../percolation"

describe("percolation", () => {
  test("create 2x2 grid", () => {
    const percolation = new Percolation(2)

    expect(percolation.grid).toStrictEqual([0, 1, 2, 3])
  })
})
