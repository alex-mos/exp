import { parse } from "./parse"
import SingleTag from "./SingleTag"
import PairedTag from "./PairedTag"

describe("buildNode", () => {
  test("build single tag", () => {
    const tag = parse(["br", {}])

    expect(tag instanceof SingleTag).toBe(true)
    expect(tag instanceof PairedTag).toBe(false)
  })

  test("build paired tag", () => {
    const tag = parse(["div", {}, "", []])

    expect(tag instanceof SingleTag).toBe(false)
    expect(tag instanceof PairedTag).toBe(true)
  })

  test("empty children", () => {
    const tag = parse(["div", {}, "", []])

    expect(JSON.stringify(tag)).toBe('{"name":"div","attributes":{},"body":""}')
  })
})
