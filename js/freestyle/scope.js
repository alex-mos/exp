'use strict';

var a = 1;

var f = () => {
	let a = 10;
};

f();

console.log(a);


// ---

var sum = (n1) => {
	return function (n2) {
		return n1 + n2;
	};
};

console.log(sum(10)(20));
