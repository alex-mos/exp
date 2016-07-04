'use strict';

function* gen() {
	for (let i=0; ; i++) {
		yield 'abc' + Math.round(Math.random() * 1000);
	}
}

var g = gen();

for (let i=0; i<10; i++) {
	console.log(g.next().value);
}