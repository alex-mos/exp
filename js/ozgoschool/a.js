const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
})

const counters = {}

rl.on('line', function(line) {
  if (counters[line] === undefined) {
    counters[line] = 1
  } else {
    counters[line] = counters[line] + 1
  }
})

rl.on('close', function() {
  for (item in counters) {
    if (counters[item] === 1) {
      console.log(item)
    }
  }
})
