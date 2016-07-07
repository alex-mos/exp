'use strict';

var a = [1, 2, 3, 4];

a = a.filter(function(value, index) {
	if ((index + 1) % 2 == 0) {
		return value;
	}
});

console.log(a);