import { fuzzySearch } from "../fuzzy-search"

describe("fuzzy-search", () => {
  test("main", () => {
    expect(fuzzySearch("car", "cartwheel")).toBe(true)
    expect(fuzzySearch("cwhl", "cartwheel")).toBe(true)
    expect(fuzzySearch("we", "cartwheel")).toBe(true)
    expect(fuzzySearch("cartwheel", "cartwheel")).toBe(true)
    expect(fuzzySearch("cwheeel", "cartwheel")).toBe(false)
    expect(fuzzySearch("lw", "cartwheel")).toBe(false)
  })
})
