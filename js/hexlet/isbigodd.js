// my
var isBigOdd = (num) => num > 1000 ? (num % 2 ? true : false) : false;

// best
var isBigOdd = (num) => num % 2 !== 0 && num > 1000;

// dumb
var isBigOdd = function (num) {
	if (num > 1000) {
		if (num % 2) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
};

console.log(isBigOdd(3));
console.log(isBigOdd(4));
console.log(isBigOdd(1005));
console.log(isBigOdd(undefined));