var promise = new Promise(function (fulfill, reject) {
	fulfill('PROMISE VALUE');
}).then(onFulfill, onReject);

function onFulfill (result) {
	console.log(result);
}

function onReject (error) {

}

console.log('MAIN PROGRAM');