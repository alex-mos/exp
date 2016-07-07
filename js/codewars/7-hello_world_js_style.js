//var say = function (string1) {
//	return function (string2) {
//		return `${string1} ${string2}`
//	};
//};

var say = string1 => string2 => `${string1} ${string2}`;

console.log(say('Hello')('World'));