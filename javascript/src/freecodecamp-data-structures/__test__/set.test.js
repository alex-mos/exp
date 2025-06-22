import { Set } from "../set"

describe("Set", () => {
  test("intersection", () => {
    let s1 = new Set(["a", "b", "c"])
    let s2 = new Set(["c", "d", "e"])
    expect(s1.intersection(s2)).toEqual(["c"])

    s1 = new Set(["a", "b", "c"])
    s2 = new Set(["a", "b", "c"])
    expect(s1.intersection(s2)).toEqual(["a", "b", "c"])
  })

  test("difference", () => {
    let s1 = new Set(["a", "b", "c"])
    let s2 = new Set(["c", "d", "e"])
    expect(s1.difference(s2)).toEqual(new Set(["a", "b", "d", "e"]))
  })

  test("subset", () => {
    let s1 = new Set(["a", "b"])
    let s2 = new Set(["a", "b", "c", "d", "e"])
    expect(s1.subset(s2)).toBe(true)
    s1 = new Set(["a", "f"])
    s2 = new Set(["a", "b", "c", "d", "e"])
    expect(s1.subset(s2)).toBe(false)
  })
})
