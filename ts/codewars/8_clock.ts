const getMillisecondsInSeconds = (s: number): number => s * 1000
const getMillisecondsInMinutes = (m: number): number => 60 * getMillisecondsInSeconds(m)
const getMillisecondsInHours = (h: number): number => 60 * getMillisecondsInMinutes(h)

export function past(h: number, m: number, s: number): number {
  return getMillisecondsInHours(h) + getMillisecondsInMinutes(m) + getMillisecondsInSeconds(s)
}
