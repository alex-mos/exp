console.log('name: ', name)
console.log('handle: ', handle)
console.log('getUser :', getUser)

var name = 'Tyler'
var handle = '@tylermcginnis'

function getUser () {
  return {
    name: name,
    handle: handle
  }
}





function findLongestWordLength(str) {
  let oldWord = ''

  str.split(' ').forEach(word => {
    if (word.length > oldWord.length) {
      oldWord = word
    }
    console.log(oldWord)
  })
  return oldWord.length
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
