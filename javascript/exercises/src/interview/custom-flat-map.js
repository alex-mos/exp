Array.prototype.customFlatMap = function (callback) {
  const intermediate = []
  const result = []

  for (let item of this) {
    intermediate.push(callback(item))
  }

  for (let item of intermediate) {
    if (Array.isArray(item)) {
      result = result.concat(item)
    } else {
      result.push(item)
    }
  }

  return result
}
