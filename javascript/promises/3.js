new Promise((fulfill, reject) => {
  setTimeout(function() {
    // var error = new Error()
    // error.message = 'REJECTED!'
    reject(new Error('REJECTED!'))
  }, 300)
}).then(null, (error) => {
  console.log(error.message)
})
