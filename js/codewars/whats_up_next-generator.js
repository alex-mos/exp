'use strict'

const nextItem = function(xs, item) {
	let next = false
	for (let testing of xs) {
		if (next) {
			return testing
		}
		next = testing == item
	}
};

// -----

console.log(nextItem("testing", "t"))

function* countFrom(n) {
	for (let i = n; ; ++i) {
		yield i
	}
}

console.log(nextItem(countFrom(1), 12))
