import { G964 } from "../5-caesars-cipher-2"

describe("caesarsCipher G964", () => {
  test("encodeStr, decode by 1", () => {
    const initial = "I should have known that you would have a perfect answer for me!!!"
    const coded = ["ijJ tipvme ibw", "f lopxo uibu z", "pv xpvme ibwf ", "b qfsgfdu botx", "fs gps nf!!!"]

    expect(G964.encodeStr(initial, 1)).toEqual(coded)
    expect(G964.decode(coded)).toBe(initial)
  })

  test("encodeStr, decode by 111", () => {
    const initial = "I should have known that you would have a perfect answer for me!!!"
    const coded = G964.encodeStr(initial, 111)

    expect(G964.decode(coded)).toBe(initial)
  })
})
