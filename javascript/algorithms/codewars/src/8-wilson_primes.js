/** * My ***/

// Math.factorial = function (n) {
//	var result = 1;
//	for (var i=2; i<=n; i++) {
//		result *= i;
//	}
//	return result;
// };

// var amIWilson = p => ((Math.factorial(p - 1) + 1) / (p * p)) % 1 === 0;

/** * Best ***/

function amIWilson(p) {
  function fact(x) {
    return x <= 1 ? 1 : x * fact(x - 1)
  }

  return (fact(p - 1) + 1) / (p * p) % 1 === 0
}

/** * Usage ***/

for (var i = 1; i < 10; i++) {
  console.log(i, amIWilson(i))
}
