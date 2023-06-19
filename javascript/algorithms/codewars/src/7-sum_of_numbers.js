/* my */
getSum = (a, b) => {
  let total = 0
  for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
    total += i
  }
  return total
}

/* best */
const getSum = (a, b) => {
  const min = Math.min(a, b)
  const max = Math.max(a, b)
  return (max - min + 1) * (min + max) / 2
}

/* test */
console.log(getSum(-1, -1))
console.log(getSum(-1, 2))
console.log(getSum(10, 20))
