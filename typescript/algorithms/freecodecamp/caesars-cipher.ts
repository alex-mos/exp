export function rot13(string: string): string {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ]
  let result: string = ""
  for (let char of string.split("")) {
    if (letters.includes(char)) {
      let newCharIndex: number = letters.indexOf(char) + 13
      if (newCharIndex >= 26) {
        newCharIndex = newCharIndex - 26
      }
      result += letters[newCharIndex]
    } else {
      result += char
    }
  }
  return result
}
