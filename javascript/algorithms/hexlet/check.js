var result = function(a, b, c, d) {
  if (a === c && b === d) {
    return 2
  }
  if ((a > b && c > d) ||
		(a < b && c < d) ||
		(a === b && c === d)) {
    return 1
  }
  return 0
}

console.log(result(1, 2, 1, 2))
console.log(result(1, 3, 1, 2))
console.log(result(4, 3, 0, 0))
