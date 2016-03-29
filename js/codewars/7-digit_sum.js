"use strict";

/*** My ***/

//var digitSum = (str) => {
//	str = str.split('');
//
//	str = str.reduce((sum, char) => {
//		return sum + parseInt(char);
//	}, 0);
//
//	str = str.toString();
//
//	return str.length > 1 ? digitSum(str) : str;
//};

/*** Best ***/

function digitSum (str) {
	let sum = String([...str].map(Number).reduce((a, b) => a + b, 0));
	return sum.length > 1 ? digitSum(sum) : sum;
}

/*** Usage ***/

console.log(digitSum('123'));
