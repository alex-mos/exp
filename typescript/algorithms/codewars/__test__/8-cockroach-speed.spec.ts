import { assert } from "chai"
import { cockroachSpeed } from "../8-cockroach-speed"

describe("8-cockroach-speed", () => {
  it("basic", () => {
    assert.equal(cockroachSpeed(0), 0)
    assert.equal(cockroachSpeed(1.08), 30)
    assert.equal(cockroachSpeed(1.09), 30)
  })
  it("edge cases", () => {
    assert.equal(cockroachSpeed(2.879988196403384), 79)
  })
})
