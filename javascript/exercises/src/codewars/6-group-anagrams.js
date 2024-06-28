/* my */
const normalize = (word) => word.split("").sort().join("")

const groupAnagrams = (arr) => {
  let resultObj = {}

  arr.map((item) => {
    if (!resultObj[normalize(item)]) {
      resultObj[normalize(item)] = Array(item)
    } else {
      resultObj[normalize(item)].push(item)
    }
  })

  let resultArr = []

  for (key in resultObj) {
    resultArr.push(resultObj[key])
  }

  return resultArr
}

/* best */
function groupAnagrams(words) {
  var groups = {}
  words.forEach(function (w) {
    var s = w.split("").sort().join("")
    groups[s] = (groups[s] || []).concat([w])
  })
  return Object.keys(groups).map(function (k) {
    return groups[k]
  })
}

// test
const assert = require("assert")

assert.deepEqual(
  groupAnagrams(["tsar", "rat", "tar", "star", "tars", "cheese"]),
  [["tsar", "star", "tars"], ["rat", "tar"], ["cheese"]],
)
