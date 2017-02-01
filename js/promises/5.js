var promise = new Promise((fulfill, reject) => {
	fulfill('PROMISE VALUE')
}).then(result => {
	console.log(result)
})

console.log('MAIN PROGRAM')
