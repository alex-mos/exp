function countBy(x, n) {
	var z = [];
	for (var i = 1; i <= n; i++) {
		z.push(i * x);
	}
	return z;
}

console.log(countBy(2, 5));