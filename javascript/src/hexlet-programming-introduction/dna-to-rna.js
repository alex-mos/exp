export function dnaToRna(str) {
  let result = ""
  for (const letter of str) {
    switch (letter) {
      case "G":
        result += "C"
        break
      case "C":
        result += "G"
        break
      case "T":
        result += "A"
        break
      case "A":
        result += "U"
        break
      default:
        return null
    }
  }
  return result
}
