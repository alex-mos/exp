const assert = require('assert')

const titleCase = (str) => {
  return str.split(' ').map((word) => word.split('').map((char, index) => {
    return index === 0 ? char.toUpperCase() : char.toLowerCase()
  }).join('')).join(' ')
}

assert.equal(titleCase('I\'m a little tea pot'), 'I\'m A Little Tea Pot')
assert.equal(titleCase('sHoRt AnD sToUt'), 'Short And Stout')
