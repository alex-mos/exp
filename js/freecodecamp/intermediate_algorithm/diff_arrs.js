export default function diffArray (arr1, arr2) {
  let result = []
  arr1.map(item => {
    if (!arr2.includes(item)) {
      result.push(item)
    }
  })
  arr2.map(item => {
    if (!arr1.includes(item)) {
      result.push(item)
    }
  })
  return result.sort((a, b) => a - b)
}
