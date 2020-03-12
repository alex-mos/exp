function telephoneCheck(str) {
  const numbers = []
  let bracketsCounter = 0
  let charsInBrackets = 0
  // если дефис стоит в начале или в конце номера — номер невалидный
  if (str[0] === '-' || str[str.length - 1] === '-') return false
  for (let char of str.split('')) {
    // если скобки невалидны — номер невалидный
    if (char === '(') bracketsCounter++
    if (char === ')') bracketsCounter--
    if (bracketsCounter < 0) return false

    // если в скобках больше трёх цифр — номер невалидный
    if (bracketsCounter) charsInBrackets++
    if (charsInBrackets > 4) return false

    // если в номере содержится что-то кроме скобок, дефиса и цифр — номер невалидный
    if ('0123456789'.includes(char)) numbers.push(char)
    else if (!'()- '.includes(char)) return false
  }
  // если номер содержит 10 цифр (телефон без кода страны) — номер валидный
  if (numbers.length === 10) return true
  // если номер содержит 11 цифр и первая — это код америки — номер валидный
  return numbers.length === 11 && numbers[0] === '1'
}


assert.equal(telephoneCheck("1 555-555-5555"), true)
assert.equal(telephoneCheck("1 (555) 555-5555"), true)
assert.equal(telephoneCheck("5555555555"), true)
assert.equal(telephoneCheck("555-555-5555"), true)
assert.equal(telephoneCheck("(555)555-5555"), true)
assert.equal(telephoneCheck("1(555)555-5555"), true)
assert.equal(telephoneCheck("555-5555"), false)
assert.equal(telephoneCheck("5555555"), false)
assert.equal(telephoneCheck("1 555)555-5555"), false)
assert.equal(telephoneCheck("1 555 555 5555"), true)
assert.equal(telephoneCheck("1 456 789 4444"), true)
assert.equal(telephoneCheck("123**&!!asdf#"), false)
assert.equal(telephoneCheck("55555555"), false)
assert.equal(telephoneCheck("(6054756961)"), false)
assert.equal(telephoneCheck("2 (757) 622-7382"), false)
assert.equal(telephoneCheck("0 (757) 622-7382"), false)
assert.equal(telephoneCheck("-1 (757) 622-7382"), false)
assert.equal(telephoneCheck("2 757 622-7382"), false)
assert.equal(telephoneCheck("10 (757) 622-7382"), false)
assert.equal(telephoneCheck("27576227382"), false)
assert.equal(telephoneCheck("(275)76227382"), false)
assert.equal(telephoneCheck("2(757)6227382"), false)
assert.equal(telephoneCheck("2(757)622-7382"), false)
assert.equal(telephoneCheck("555)-555-5555"), false)
assert.equal(telephoneCheck("(555-555-5555"), false)
assert.equal(telephoneCheck("(555)5(55?)-5555"), false)
