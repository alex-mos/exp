import { assert } from "chai"
import { getSum } from "../7-sum-of-numbers"

describe("7-sum-of-numbers", () => {
  it("1, 0", () => {
    assert.equal(getSum(1, 0), 1)
  })
  it("1, 2", () => {
    assert.equal(getSum(1, 2), 3)
  })
  it("0, 1", () => {
    assert.equal(getSum(0, 1), 1)
  })
  it("1, 1", () => {
    assert.equal(getSum(1, 1), 1) // 1 since both are same
  })
  it("-1, 0", () => {
    assert.equal(getSum(-1, 0), -1)
  })
  it("0, -1", () => {
    assert.equal(getSum(0, -1), -1)
  })
  it("-1, 2", () => {
    assert.equal(getSum(-1, 2), 2) // -1 + 0 + 1 + 2 = 2
  })
  it("-5, 5", () => {
    assert.equal(getSum(-5, 5), 0)
  })
  it("-5, 0", () => {
    assert.equal(getSum(-5, 0), -15)
  })
  it("-5, -1", () => {
    assert.equal(getSum(-5, -1), -15)
  })
  it("0, 5", () => {
    assert.equal(getSum(0, 5), 15)
  })
  it("1, 5", () => {
    assert.equal(getSum(1, 5), 15)
  })
  it("5, 1", () => {
    assert.equal(getSum(5, 1), 15)
  })
  it("5, 5", () => {
    assert.equal(getSum(5, 5), 5)
  })
  it("-10, -5", () => {
    assert.equal(getSum(-10, -5), -45)
  })
})
