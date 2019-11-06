export default function mexicanWave(str: string): string[] {
  const result: string[] = [];
  for (let i: number = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      result.push(`${str.substr(0, i)}${str[i].toUpperCase()}${str.substr(i+1)}`)
    }
  }
  return result
}
