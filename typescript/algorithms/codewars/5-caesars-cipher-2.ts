export class G964 {
  private static letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ]

  public static encodeStr(str: string, shift: number): string[] {
    const shiftedArr = str.split("").map((char) => {
      if (this.letters.indexOf(char.toLowerCase()) !== -1) {
        return this.shiftChar(char, shift)
      }
      return char
    })
    shiftedArr.unshift(this.shiftChar(str[0].toLowerCase(), shift))
    shiftedArr.unshift(str[0].toLowerCase())
    return this.split(shiftedArr.join(""))
  }

  public static decode(arr: string[]): string {
    let str = arr.join("")
    const firstCharIndex = this.letters.indexOf(str[0])
    const shiftedCharIndex = this.letters.indexOf(str[1])
    const shift = shiftedCharIndex - firstCharIndex
    str = str.slice(2)

    return str
      .split("")
      .map((char) => {
        if (this.letters.indexOf(char.toLowerCase()) !== -1) {
          return this.shiftChar(char, -shift)
        }
        return char
      })
      .join("")
  }

  private static shiftChar(char: string, shift: number): string {
    const initialCharIndex = this.letters.indexOf(char.toLowerCase())
    let shiftedCharIndex = this.calcShiftedChartIndex(initialCharIndex, shift)
    if (this.isCapital(char)) {
      return this.letters[shiftedCharIndex].toUpperCase()
    }
    return this.letters[shiftedCharIndex]
  }

  private static calcShiftedChartIndex(initialCharIndex: number, shift: number): number {
    let shiftedCharIndex = (initialCharIndex + shift) % this.letters.length
    if (shiftedCharIndex < 0) {
      shiftedCharIndex = this.letters.length + shiftedCharIndex
    }
    return shiftedCharIndex
  }

  private static isCapital(char: string): boolean {
    return char === char.toUpperCase()
  }

  private static split = (str: string): string[] => {
    const pieceLength = Math.ceil(str.length / 5)
    const result = []
    for (let i = 0; i < 5; i++) {
      result.push(str.slice(i * pieceLength, i * pieceLength + pieceLength))
    }
    if (!result[4].length) {
      result.pop()
    }
    return result
  }
}
