import data from "./data-unsorted.json"
import expected from "./data-sorted.json"

import { bubbleSort } from "../bubble"

describe("bubble sort", () => {
  test("main", () => {
    bubbleSort(data)
    expect(data).toStrictEqual(expected)
  })
})
