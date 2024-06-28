// start app:
// deno run --allow-net index.ts

import http from "node:http"

const host: string = 'localhost'
const port: number = 8000

const hi: string = "Hello"


const requestListener = function(req, res) {
  res.writeHead(200)
  res.end(hi)
}

const server = http.createServer(requestListener)

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})
