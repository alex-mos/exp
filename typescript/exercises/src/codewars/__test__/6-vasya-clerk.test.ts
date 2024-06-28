import { tickets, putBanknoteInCashRegister, removeChangeFromRegister } from "../6-vasya-clerk"

describe("6_vasyaClerk", () => {
  test("putBanknoteInCashRegister", () => {
    expect(putBanknoteInCashRegister(25, [])).toEqual([25])
    expect(putBanknoteInCashRegister(25, [100])).toEqual([100, 25])
    expect(putBanknoteInCashRegister(100, [25])).toEqual([100, 25])
  })

  test("removeChangeFromRegister", () => {
    expect(removeChangeFromRegister(25, [])).toEqual([])
    expect(removeChangeFromRegister(50, [])).toEqual(false)
    expect(removeChangeFromRegister(50, [25])).toEqual([])
    expect(removeChangeFromRegister(100, [100, 50, 25, 25])).toEqual([100, 25])
  })

  test("tickets", () => {
    expect(tickets([25, 25, 50])).toBe("YES")
    expect(tickets([25, 25, 50, 50])).toBe("YES")
    expect(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100])).toBe("YES")
    expect(tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100])).toBe("YES")
    expect(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100])).toBe("YES")
    expect(tickets([25, 100])).toBe("NO")
    expect(tickets([25, 25, 50, 50, 100])).toBe("NO")
  })
})
