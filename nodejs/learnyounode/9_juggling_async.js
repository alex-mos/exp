const http = require('http')

let url1 = process.argv[2]
let url2 = process.argv[3]
let url3 = process.argv[4]

let partsCounter = 0
let result1 = ''
let result2 = ''
let result3 = ''

var isReady = () => {
  if (partsCounter === 3) {
    console.log(`${result1}\n${result2}\n${result3}`)
  }
}

http.get(url1, (response) => {
  response.on('data', (data) => {
    result1 += data;
  })

  response.on('end', () => {
    partsCounter++
    isReady()
  })
})

http.get(url2, (response) => {
  response.on('data', (data) => {
    result2 += data;
  })

  response.on('end', () => {
    partsCounter++
    isReady()
  })
})

http.get(url3, (response) => {
  response.on('data', (data) => {
    result3 += data;
  })

  response.on('end', () => {
    partsCounter++
    isReady()
  })
})
