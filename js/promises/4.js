var promise = new Promise((fulfill, reject) => {
	fulfill('I FIRED')
	reject(new Error('I DID NOT FIRE'))
}).then(result => {
	console.log(result)
}, error => {
	console.log(error.message)
})
