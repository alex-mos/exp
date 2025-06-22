export function formattedTime(minutesTotal) {
  const hoursTotal = Math.floor(minutesTotal / 60)
  const hoursInLastDay = hoursTotal % 24
  const minutesInLastHour = minutesTotal % 60
  return `${formatNumberTwoDigits(hoursInLastDay)}:${formatNumberTwoDigits(minutesInLastHour)}`
}

function formatNumberTwoDigits(num) {
  const str = String(num)
  return str.length > 1 ? str : "0" + str
}
