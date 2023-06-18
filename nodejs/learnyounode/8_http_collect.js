const http = require('http')
const url = process.argv[2]

http.get(url, (response) => {
  response.setEncoding('utf8')
  let result = ''
  response.on('data', data => result += data)
  response.on('end', () => console.log(`${result.length}\n${result}`))
  response.on('error', console.error)
}).on('error', console.error)
