var triangle = {};

/**
 * Evaluates triangle area by base and height.
 *
 * @param  {number} base
 * @param  {number} height
 * @return {number} callback - area
 */
triangle.area = function(base, height, callback) {
	if (!base || !height) {
		callback({message: 'Not all data provided'});
	}

	callback(null, base * height * .5 );
};

/**
 * Evaluates triangle perimeter by three sides.
 *
 * @param {number} side1
 * @param {number} side2
 * @param {number} side3
 * @return {number} callback - perimeter
 */
triangle.perimeter = function(side1, side2, side3, callback) {
	if (!side1 || !side2 || !side3) {
		callback({message: 'Not all data provided'});
	}

	callback(null, side1 + side2 + side3);
};


module.exports = triangle;