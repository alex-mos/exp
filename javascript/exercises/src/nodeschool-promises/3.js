new Promise((fulfill, reject) => {
  setTimeout(function () {
    reject(new Error("REJECTED!"))
  }, 300)
}).then(null, (error) => {
  console.log(error.message)
})
