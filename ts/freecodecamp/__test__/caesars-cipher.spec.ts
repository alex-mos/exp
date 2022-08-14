import { expect } from "chai"
import { rot13 } from "../caesars-cipher"

describe("caesarsCipher rot13", () => {
  it("freecodecamp", () => {
    expect(rot13("SERR PBQR PNZC")).to.equal("FREE CODE CAMP")
    expect(rot13("SERR CVMMN!")).to.equal("FREE PIZZA!")
    expect(rot13("SERR YBIR?")).to.equal("FREE LOVE?")
    expect(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.")).to.equal(
      "THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG."
    )
  })
})
