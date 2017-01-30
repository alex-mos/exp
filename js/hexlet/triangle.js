module.exports.triangleSquare = function (base, side) {
	return (base * Math.sqrt(side * side - base * base / 4)) / 2;
};