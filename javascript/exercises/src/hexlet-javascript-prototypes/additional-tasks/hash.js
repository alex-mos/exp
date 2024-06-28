// Добавьте в Object.prototype функцию hash(), которая позволяет извлекать вложенные значения из объекта.

Object.prototype.hash = function (path) {
  const splitteddPath = path.split(".")

  let result = this

  for (let item of path.split(".")) {
    if (result[item]) {
      result = result[item]
    } else {
      return undefined
    }
  }
  return result
}
