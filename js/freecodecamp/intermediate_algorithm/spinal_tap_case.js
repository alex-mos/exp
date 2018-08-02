import assert from 'assert'

// Разбивает кемелкейс, вставляя перед каждым словом, начинающимся с заглавной буквы, пробел.
const _splitCamelCase = str => str.replace(/[A-Z][a-z]+/g, match => ` ${match}`)

assert.equal(_splitCamelCase('TheAndyGriffithShow'), ' The Andy Griffith Show')
assert.equal(_splitCamelCase('theAndyGriffithShow'), 'the Andy Griffith Show')

// Собирает массив из слов, разделённых пробелом, дефисом или подчёркиванием,
// переводит в нижний регистр каждое слово, и джойнит их через дефис
function spinalCase(str) {
  str = _splitCamelCase(str)
  return str.match(/[^\s_-]+/g).map(word => word.toLowerCase()).join('-')
}

assert.equal(spinalCase("This Is Spinal Tap"), "this-is-spinal-tap")
assert.equal(spinalCase("thisIsSpinalTap"), "this-is-spinal-tap")
assert.equal(spinalCase("The_Andy_Griffith_Show"), "the-andy-griffith-show")
assert.equal(spinalCase("Teletubbies say Eh-oh"), "teletubbies-say-eh-oh")
assert.equal(spinalCase("AllThe-small Things"), "all-the-small-things")
