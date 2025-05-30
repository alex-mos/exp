export function fuzzySearch(substr: string, str: string): boolean {
  // Запоминаем положение последней найденной буквы.
  // Это поможет отделить случаи когда в строке есть все буквы из подстроки,
  // но в неправильном порядке, например:
  // tig является подстрокой tiger
  // git не является подстрокой tiger
  let lastFoundCharPosition = 0

  for (let char of substr) {
    const indexOfChar = str.indexOf(char)

    // Если искомой буквы нет
    if (indexOfChar === -1) {
      return false
    }

    // Если последнее вхождение найденной буквы
    // стоит перед предыдущей найденной буквой
    if (str.lastIndexOf(char) < lastFoundCharPosition) {
      return false
    }

    // Обновить положение последней найденной буквы
    lastFoundCharPosition = indexOfChar

    // удалить найденную букву из строки
    str = removeChar(str, char)
  }

  // Если в строке найдены все буквы из подстроки в искомом порядке,
  // значит переданная подстрока является подстрокой переданной строки
  return true
}

// Удалить из строки первое вхождние переданной буквы
function removeChar(str: string, char: string): string {
  const indexOfChar = str.indexOf(char)
  if (indexOfChar === -1) {
    return str
  }
  return str.slice(0, indexOfChar) + str.slice(indexOfChar + 1)
}
