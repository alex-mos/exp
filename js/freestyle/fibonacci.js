// Recursive way
//var fibonacci = n => n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);

// Memoization way
var fibonacci = function () {
	var memo = [0, 1];
	var fib = function (n) {
		var result = memo[n];
		if (isNaN(result)) {
			result = fib(n - 1) + fib(n - 2);
			memo[n] = result;
		}
		return result;
	};
	return fib;
}();


for (var i = 0; i < 11; i++) {
	console.log(fibonacci(i));
}

