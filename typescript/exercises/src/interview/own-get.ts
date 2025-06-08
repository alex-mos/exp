export function ownGet(obj, path: string) {
  const pathArr = path.split(".")
  let result = obj

  for (let prop of pathArr) {
    if (result[prop]) {
      result = result[prop]
    } else {
      return null
    }
  }

  return result
}
