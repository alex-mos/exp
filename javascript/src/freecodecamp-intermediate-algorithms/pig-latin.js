import assert from "assert"

function translatePigLatin(str) {
  if ("euioa".includes(str[0])) {
    return `${str}way`
  } else {
    let firstConsonants = str.match(/[qwrtpsdfghyjklzxcvbnm]+/)[0]
    return `${str.slice(firstConsonants.length)}${firstConsonants}ay`
  }
}

assert.equal(translatePigLatin("california"), "aliforniacay")
assert.equal(translatePigLatin("paragraphs"), "aragraphspay")
assert.equal(translatePigLatin("glove"), "oveglay")
assert.equal(translatePigLatin("algorithm"), "algorithmway")
assert.equal(translatePigLatin("eight"), "eightway")

assert.equal(translatePigLatin("cry"), "cryay")
assert.equal(translatePigLatin("crmnl"), "crmnlay")
assert.deepEqual(translatePigLatin("rhythm"), "rhythmay")

// vowel – гласная
// consonant – согласная
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.
