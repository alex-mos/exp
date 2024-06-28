function numberFormat(number, separator) {
  const parts = []
  if (number < 1000) {
    return String(number)
  }
  do {
    const chunk = number % 1000

    number = parseInt(number / 1000)
    if (number > 0) {
      parts.push(chunk > 100 ? chunk : chunk > 10 ? "0" + chunk : "00" + chunk)
    } else {
      parts.push(chunk)
    }
  } while (number > 0)
  // Разделитель по умолчанию — &thisp
  separator = separator || " "
  return parts.reverse().join(separator)
}
