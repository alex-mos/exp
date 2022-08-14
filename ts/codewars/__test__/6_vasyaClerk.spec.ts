import { assert } from "chai"
import { tickets, putBanknoteInCashRegister, removeChangeFromRegister } from "../6_vasyaClerk"

describe("6_vasyaClerk", () => {
  it("putBanknoteInCashRegister", () => {
    assert.deepEqual(putBanknoteInCashRegister(25, []), [25])
    assert.deepEqual(putBanknoteInCashRegister(25, [100]), [100, 25])
    assert.deepEqual(putBanknoteInCashRegister(100, [25]), [100, 25])
  })

  it("removeChangeFromRegister", () => {
    assert.deepEqual(removeChangeFromRegister(25, []), [])
    assert.deepEqual(removeChangeFromRegister(50, []), false)
    assert.deepEqual(removeChangeFromRegister(50, [25]), [])
    assert.deepEqual(removeChangeFromRegister(100, [100, 50, 25, 25]), [100, 25])
  })

  it("tickets", () => {
    assert.equal(tickets([25, 25, 50]), "YES")
    assert.equal(tickets([25, 25, 50, 50]), "YES")
    assert.equal(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100]), "YES")
    assert.equal(
      tickets([
        25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100
      ]),
      "YES"
    )
    assert.equal(
      tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100]),
      "YES"
    )
    assert.equal(tickets([25, 100]), "NO")
    assert.equal(tickets([25, 25, 50, 50, 100]), "NO")
  })
})
