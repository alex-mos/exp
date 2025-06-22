import { G964 } from "../5-caesars-cipher-1"

describe("caesarsCipher G964", () => {
  test("movingShift, demovingShift by 1", () => {
    const initial = "I should have known that you would have a perfect answer for me!!!"
    const coded = ["J vltasl rlhr ", "zdfog odxr ypw", " atasl rlhr p ", "gwkzzyq zntyhv", " lvz wp!!!"]

    expect(G964.movingShift(initial, 1)).toEqual(coded)
    expect(G964.demovingShift(coded, 1)).toBe(initial)
  })

  test("movingShift, demovingShift by 111", () => {
    const initial = "I should have known that you would have a perfect answer for me!!!"
    const coded = G964.movingShift(initial, 111)

    expect(G964.demovingShift(coded, 111)).toBe(initial)
  })
})
