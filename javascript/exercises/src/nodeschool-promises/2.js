var promise = new Promise((fulfill, reject) => {
  setTimeout(function () {
    fulfill("FULFILLED!")
  }, 300)
}).then(function (result) {
  console.log(result)
})
