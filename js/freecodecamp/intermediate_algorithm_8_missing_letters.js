const assert = require('assert')

const fearNotLetter = (str) => {
  debugger;
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let result = []
  let start = alphabet.indexOf(str[0])
  let finish = alphabet.indexOf(str[str.length - 1])
  let strItem = 0
  for (let i = start; i < finish; i++) {
    if (alphabet[i] === str[strItem]) {
      strItem++
    } else {
      result.push(alphabet[i])
    }
  }
  // todo: найти лучший способ проверить пустоту массива
  return result != false ? result.join('') : undefined
}

assert.equal(fearNotLetter('abce'), 'd')
assert.equal(fearNotLetter('abcdefghjklmno'), 'i')
assert.equal(fearNotLetter('bcd'), undefined)
