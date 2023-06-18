import assert from 'assert'

function splitify(str) {
  return str.split(/[\s-,.]/)
}

assert.deepEqual(splitify("Hello World,I-am code"), ["Hello", "World", "I", "am", "code"])
assert.deepEqual(splitify("This.is.a-sentence"), ["This", "is", "a", "sentence"])

function urlSlug(title) {
  return title.toLowerCase().split(' ').filter(w => w !== '').join('-')
}

assert.equal(urlSlug("Winter Is   Coming"), "winter-is-coming")