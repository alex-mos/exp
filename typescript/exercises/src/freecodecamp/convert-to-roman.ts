export function convertToRoman(number: number): string {
  const pairs: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ]

  for (let pair of pairs) {
    const arabic: number = pair[0]
    const roman: string = pair[1]

    if (number >= arabic) {
      return roman + convertToRoman(number - arabic)
    }
  }

  return ""
}
