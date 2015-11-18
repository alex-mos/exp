var http = require('http');

var server = http.createServer(function(request, response) {
    response.end('hello docker!!!');
});

server.listen(8000);