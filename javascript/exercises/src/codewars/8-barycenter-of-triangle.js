/** * My ***/

// var barTriang = (p1, p2, p3) => {
//	var barycenter = [];
//
//	for (var i=0; i<2; i++) {
//		barycenter.push( Math.round(((p1[i] + p2[i] + p3[i]) / 3) * 10000) / 10000 );
//	}
//
//	return barycenter;
// };

/** * Best ***/

function barTriang(p1, p2, p3) {
  return [point(p1[0], p2[0], p3[0]), point(p1[1], p2[1], p3[1])]
}

function point(p1, p2, p3) {
  return Math.round(((p1 + p2 + p3) / 3) * 10000) / 10000
}

/** * Usage ***/

console.log(barTriang([4, 6], [12, 4], [10, 10]))
