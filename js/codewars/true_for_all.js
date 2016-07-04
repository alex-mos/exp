function all( arr, fun ){
	var check = true;

	for (var i = 0; i < arr.length; i++) {
		if (fun(arr[i]) ===false) {
			check = false;
		}
	}

	return check;
}