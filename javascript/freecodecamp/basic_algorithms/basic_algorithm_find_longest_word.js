const assert = require('assert')

const findLongestWord = (string) => {
  return string.split(' ').reduce((prevResult, currentWord) => {
    // console.log('longestWord: ' + prevResult)
    // console.log('currentWord: ' + currentWord)
    return currentWord.length > prevResult ? currentWord.length : prevResult
  }, 0)
}

assert.equal(findLongestWord('The quick brown fox jumped over the lazy dog'), 6)
assert.equal(findLongestWord('May the force be with you'), 5)
