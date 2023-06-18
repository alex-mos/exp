import assert from 'assert'

const _isCapitalized = str => str !== str.toLowerCase()

assert.equal(_isCapitalized('Big'), true)
assert.equal(_isCapitalized('small'), false)

const _capitalize = str => str.slice(0, 1).toUpperCase() + str.slice(1)

assert.equal(_capitalize('low'), 'Low')

function myReplace(str, before, after) {
  if (_isCapitalized(before)) {
    after = _capitalize(after)
  }
  return str.replace(before, after)
}

assert.equal(myReplace("Let us go to the store", "store", "mall"), "Let us go to the mall")
assert.equal(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"), "He is Sitting on the couch")
assert.equal(myReplace("This has a spellngi error", "spellngi", "spelling"), "This has a spelling error")
assert.equal(myReplace("His name is Tom", "Tom", "john"), "His name is John")
assert.equal(myReplace("Let us get back to more Coding", "Coding", "algorithms"), "Let us get back to more Algorithms")