const http = require('http')
const url = require('url')
const querystring = require('querystring')
const port = process.argv[2]

http.createServer((req, res) => {
  let pathname = url.parse(req.url).pathname // берём адрес
  let query = url.parse(req.url).query // берём querystring
  let timeString = querystring.decode(query).iso // парсим querystring, берём поле iso
  let time = new Date(timeString)
  let result

  if (pathname === '/api/parsetime') {
    result = {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  } else if (pathname === '/api/unixtime') {
    result = {
      unixtime: time.getTime()
    }
  }

  if (result) {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('endpoint not found')
  }

}).listen(port)
