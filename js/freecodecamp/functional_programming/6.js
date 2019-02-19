// the global Array
let s = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback){
  let newArray = [];
  // Add your code below this line
  this.forEach(item => {
    if (callback(item)) {
      newArray.push(item)
    }
  })
  // Add your code above this line
  return newArray;
};

let new_s = s.myFilter(function(item){
  return item % 2 === 1;
});

console.log(new_s)
