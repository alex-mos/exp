"use strict"

/* My */

// var formatMoney = function(amount) {
//	var amountStr = amount.toString();
//	if (amountStr.lastIndexOf('.') != -1) {
//		switch (amountStr.length - amountStr.lastIndexOf('.')) {
//			case 3:
//				return '$' + amountStr;
//			case 2:
//				return '$' + amountStr + '0';
//			case -1:
//		}
//	} else {
//		return '$' + amountStr + '.00';
//	}
// };

/* Best */

var formatMoney = (amt) => "$" + amt.toFixed(2)

/* Usage */

console.log(formatMoney(3))
console.log(formatMoney(3.99))
