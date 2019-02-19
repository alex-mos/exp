function sliceArray(arr, beginSlice, endSlice) {
  // Add your code below this line
  return arr.slice(beginSlice, endSlice)
  // Add your code above this line
}

let inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"]

// should return ["Dog", "Tiger"]
console.log(sliceArray(inputAnim, 1, 3))
