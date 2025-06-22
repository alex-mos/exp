export function isMono(arr) {
  let descending = false
  let ascending = false

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i]
    const next = arr[i + 1]
    if (next === undefined) {
      return true
    }
    if (next > current) {
      ascending = true
      if (descending) return false
    }
    if (next < current) {
      descending = true
      if (ascending) return false
    }
  }

  return true
}
