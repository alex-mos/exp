var capitals = function(word) {
  var result = []
  for (let i = 0; i < word.length; i++) {
    var character = word[i]
    if (character === character.toUpperCase()) {
      result.push(i)
    }
  }
  return result
}

console.log(capitals('CodEWaRs'))
