// reference error
var referenceError = () => {
  return nothing
}

// type error
var typeError = () => {
  const a = 3
  return a()
}
