const promise = Promise.reject(new Error("Oh, on no!"))

promise.catch((error) => {
  console.log(error.message)
})
