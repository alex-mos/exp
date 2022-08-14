import { assert } from "chai"
import { paperwork } from "../8_paperwork"

describe("8_paperwork", () => {
  it("5 * 5", () => {
    assert.equal(paperwork(5, 5), 25)
  })
  it("classmates are less than zero", () => {
    assert.equal(paperwork(-5, 5), 0)
  })
  it("pages are less than zero", () => {
    assert.equal(paperwork(5, -5), 0)
  })
})
