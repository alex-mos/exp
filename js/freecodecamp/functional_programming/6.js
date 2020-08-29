// the global Array
const s = [23, 65, 98, 5]

Array.prototype.myFilter = function(callback) {
  const newArray = []
  // Add your code below this line
  this.forEach((item) => {
    if (callback(item)) {
      newArray.push(item)
    }
  })
  // Add your code above this line
  return newArray
}

const new_s = s.myFilter(function(item) {
  return item % 2 === 1
})

console.log(new_s)
