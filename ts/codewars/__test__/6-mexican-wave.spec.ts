import { assert } from "chai"
import mexicanWave from "../6-mexican-wave"

describe("6-mexican-wave", function () {
  it("empty", function () {
    const result: string[] = []
    assert.deepEqual(mexicanWave(""), result, "Should return: '" + result + "'")
  })

  it("hello", function () {
    const result: string[] = ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
    assert.deepEqual(mexicanWave("hello"), result, "Should return: '" + result + "'")
  })

  it("codewars", function () {
    const result: string[] = [
      "Codewars",
      "cOdewars",
      "coDewars",
      "codEwars",
      "codeWars",
      "codewArs",
      "codewaRs",
      "codewarS"
    ]
    assert.deepEqual(mexicanWave("codewars"), result, "Should return: '" + result + "'")
  })

  it("two words", function () {
    const result: string[] = [
      "Two words",
      "tWo words",
      "twO words",
      "two Words",
      "two wOrds",
      "two woRds",
      "two worDs",
      "two wordS"
    ]
    assert.deepEqual(mexicanWave("two words"), result, "Should return: '" + result + "'")
  })

  it("gap", function () {
    const result: string[] = [" Gap ", " gAp ", " gaP "]
    assert.deepEqual(mexicanWave(" gap "), result, "Should return: '" + result + "'")
  })
})
