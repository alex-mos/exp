const { rgb, decimalToHex } = require("../src/5-rgb_to_hex")

describe("5-rgb_to_hex", () => {
  it("cases", () => {
    expect(decimalToHex(0)).toBe('00')
    expect(decimalToHex(9)).toBe('09')
    expect(decimalToHex(10)).toBe('0A')
    expect(decimalToHex(11)).toBe('0B')
    expect(decimalToHex(16)).toBe('10')
    expect(decimalToHex(26)).toBe('1A')
    expect(decimalToHex(211)).toBe('D3')
    expect(rgb(255, 255, 255)).toBe('FFFFFF')
    expect(rgb(148, 0, 211)).toBe('9400D3')
    expect(rgb(0, 0, -20)).toBe('000000')
    expect(rgb(300, 255, 255)).toBe('FFFFFF')
  })
})
