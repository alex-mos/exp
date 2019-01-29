function convertHTML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

module.exports = convertHTML



console.log(convertHTML("Dolce & Gabbana"))
console.log(convertHTML("Hamburgers < Pizza < Tacos"))
console.log(convertHTML("Sixty > twelve"))
console.log(convertHTML('Stuff in "quotation marks"'))
console.log(convertHTML("Schindler's List"))
console.log(convertHTML("<>"))
console.log(convertHTML("abc"))
