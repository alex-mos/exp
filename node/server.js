var http = require('http');

var server = http.createServer(function(request, response) {
    response.end('Hi');
});

server.listen(8000);