const assert = require('assert')

var contacts = [
  {
    "firstName": "Akira",
    "lastName": "Laine",
    "number": "0543236543",
    "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "Sherlock",
    "lastName": "Holmes",
    "number": "0487345643",
    "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "Kristian",
    "lastName": "Vos",
    "number": "unknown",
    "likes": ["Javascript", "Gaming", "Foxes"]
  }
]

function lookUpProfile (firstName, prop) {
  let result
  contacts.map(function(item) {
    if (item.firstName === firstName) {
      result = item.hasOwnProperty(prop) ? item[prop] : 'No such property'
    }
  })
  return result || 'No such contact'
}

// Change these values to test your function
assert.deepEqual(lookUpProfile("Akira", "likes"), ["Pizza", "Coding", "Brownie Points"])
