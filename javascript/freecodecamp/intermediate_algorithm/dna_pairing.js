import assert from 'assert'

// AT and CG
function pairElement(str) {
  return str.split('').reduce((acc, item) => {
    let pair = ''
    switch(item) {
      case 'A':
        pair = 'T'
        break
      case 'T':
        pair = 'A'
        break
      case 'C':
        pair = 'G'
        break
      case 'G':
        pair = 'C'
        break
    }
    acc.push([item, pair])
    return acc
  }, [])
}

assert.deepEqual(pairElement("ATCGA"), [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]])
assert.deepEqual(pairElement("TTGAG"), [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]])
assert.deepEqual(pairElement("CTCTA"), [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]])