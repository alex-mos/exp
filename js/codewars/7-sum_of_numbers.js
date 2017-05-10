/* my */
getSum = (a, b) => {
	var total = 0
	for (var i = Math.min(a, b); i <= Math.max(a, b); i++) {
		total += i
	}
	return total
}

/* best */
const getSum = (a, b) => {
	let min = Math.min(a, b),
		max = Math.max(a, b)
	return (max - min + 1) * (min + max) / 2
}

/* test */
console.log(getSum(-1, -1))
console.log(getSum(-1, 2))
console.log(getSum(10, 20))
