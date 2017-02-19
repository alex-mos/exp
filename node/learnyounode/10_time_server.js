const net = require('net')
const port = process.argv[2]

const getTime = () => {
  let time = new Date()
  let month = time.getMonth() + 1
  if (month < 10) {
    month = '0' + month
  }
  let date = time.getDate()
  if (date < 10) {
    date = '0' + date
  }
  return `${time.getFullYear()}-${month}-${date} ${time.getHours()}:${time.getMinutes()}`
}

var server = net.createServer((socket) => {
  socket.end(getTime() + '\n')
})

server.listen(port)
