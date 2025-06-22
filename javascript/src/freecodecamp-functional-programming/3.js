// the global Array
const s = [23, 65, 98, 5]

Array.prototype.myMap = function (callback) {
  const newArray = []
  // Add your code below this line
  this.forEach((item) => {
    newArray.push(callback(item))
  })
  // Add your code above this line
  return newArray
}

const new_s = s.myMap(function (item) {
  return item * 2
})

console.log(new_s)
