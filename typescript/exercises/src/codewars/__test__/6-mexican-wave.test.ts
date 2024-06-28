import mexicanWave from "../6-mexican-wave"

describe("6-mexican-wave", function () {
  test("empty", function () {
    const result: string[] = []
    expect(mexicanWave("")).toEqual(result)
  })

  test("hello", function () {
    const result: string[] = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    expect(mexicanWave("hello")).toEqual(result)
  })

  test("codewars", function () {
    const result: string[] = [
      "Codewars",
      "cOdewars",
      "coDewars",
      "codEwars",
      "codeWars",
      "codewArs",
      "codewaRs",
      "codewarS",
    ]
    expect(mexicanWave("codewars")).toEqual(result)
  })

  test("two words", function () {
    const result: string[] = [
      "Two words",
      "tWo words",
      "twO words",
      "two Words",
      "two wOrds",
      "two woRds",
      "two worDs",
      "two wordS",
    ]
    expect(mexicanWave("two words")).toEqual(result)
  })

  test("gap", function () {
    const result: string[] = [" Gap ", " gAp ", " gaP "]
    expect(mexicanWave(" gap ")).toEqual(result)
  })
})
