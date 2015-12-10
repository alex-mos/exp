'use strict';

var arr = [1, 'a', 'aba', 37];


/* of */
console.log('of:');

for (let i in arr) {
	console.log(i);
}

/* in */
console.log('in:');

for (let i of arr) {
	console.log(i);
}

/* forEach */
console.log('forEach:');

arr.forEach(function(element, index){
	console.log(index + ': ' + element);
});