(function(){
	var t = 75;
	var h = 75;

	setInterval(
		function () {
			for (t -= .1, x = h, c.height = 300, Q = Math.cos; x--;) {
				for (y = h; y--; c.getContext('2d').fillRect(x * 4, y * 4, N, N)) {
					for (N = D = 4; X = D * x / h - D / 2, Y = D * y / h - D / 2, Z = D / 2 - 9, D += d = (X * X + Y * Y * Q(t / 6 + Q(D - X - Y)) + Z * Z) / 9 - 1 + Q(X + t) * Q(Y - t), .1 < d * N;) {
						N -= .1
					}
				}
			}
		}
	, 75)
})();