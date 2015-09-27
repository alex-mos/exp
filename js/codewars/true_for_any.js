function any(arr, fun){
  	var check = false;

	for (var i = 0; i < arr.length; i++) {
		if (fun(arr[i]) === true) {
			check = true;
		}
	}

	return check;
}