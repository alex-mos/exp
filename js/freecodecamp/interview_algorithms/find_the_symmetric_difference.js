function sym(args) {
  return args;
}

sym([1, 2, 3], [5, 2, 1, 4]);


let parent = {legacy: 'parentProperty'}
let obj = Object.create(parent)

console.log(obj.legacy)

obj.key = 'trap'
obj.own = 'ownProperty'

for (key in obj) {
  console.log(obj.key)
}

for (key in obj) {
  console.log(obj[key])
}

for (key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(obj[key])
  }
}

