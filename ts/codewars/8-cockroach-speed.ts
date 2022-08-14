// функция, которая конвертирует км/ч в см/с, округляя результат вниз до целого числа
export function cockroachSpeed (s: number): number {
  const CENTIMETERS_IN_KILOMETER = 100000
  const SECONDS_IN_HOUR = 3600
  return Math.floor(s * (CENTIMETERS_IN_KILOMETER / SECONDS_IN_HOUR))
}
