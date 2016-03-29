/*** My ***/

Array.prototype.sum = function () {
	return this.reduce(function (sum, item) {
		return sum + item;
	}, 0);
};

/*** Best ***/

Array.prototype.sum = function() {
	return this.reduce((sum, el) => sum + el, 0);
};

/*** Usage ***/

console.log([].sum());