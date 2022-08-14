import { assert } from "chai"
import { past } from "../8-clock"

describe("8_clock", () => {
  it("zero", () => {
    assert.equal(past(0, 0, 0), 0)
  })
  it("1 minute, 1 second", () => {
    assert.equal(past(0, 1, 1), 61000)
  })
  it("1 hour", () => {
    assert.equal(past(1, 0, 0), 3600000)
  })
  it("1 hour 1 minute, 1 second", () => {
    assert.equal(past(1, 1, 1), 3661000)
  })
})
