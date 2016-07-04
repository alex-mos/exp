"use strict";

/*** My ***/

//function SafeInteger (n) {
//	return n < Math.abs(Math.pow(2, 53));
//}

/*** Best ***/

var SafeInteger = Number.isSafeInteger; // Функция проверяет, является ли число безопасным (53-битным) интеджером.

/*** Usage ***/

console.log(SafeInteger(213434));
console.log(SafeInteger(9007199254740992));
