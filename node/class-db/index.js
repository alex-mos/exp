const telnet = require('net');
const WebSocketServer = require('ws');


// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
  port: 8081
});



// Телнет-сервер на порту 1337
var newSocket = function(socket) {
  socket.write('Welcome to the Telnet server!\n Write me anything.');




  var clients = {};

  webSocketServer.on('connection', function(ws) {
    var id = Math.random();
    clients[id] = ws;
    console.log("новое соединение " + id);

    ws.on('message', function(message) {
      console.log('получено сообщение ' + message);

      for (var key in clients) {
        clients[key].send(message);
      }
    });

    socket.on('data', function(data) {
      console.log(data.toString());

      for (var key in clients) {
        clients[key].send(data.toString());
      }
    });

    ws.on('close', function() {
      console.log('соединение закрыто ' + id);
      delete clients[id];
    });
  });






  socket.on('error', function(err) {
    // throw err;
    console.log(err);
  });
};

// Create a new server and provide a callback for when a connection occurs
var server = telnet.createServer(newSocket);

server.listen(1337);














// const mongo = require('mongodb').MongoClient;
//
// const dbURL = 'mongodb://localhost:27017/broadcast';
//
// mongo.connect(dbURL, function(err, db) {
//   if (err) throw err;
//
//   const collection = db.collection('parrots');
//
//   collection.count({
//     age: {
//       $gt: minAge
//     }
//   }, function (err, count) {
//     if (err) throw err;
//     console.log(count);
//     db.close();
//   });
// });

