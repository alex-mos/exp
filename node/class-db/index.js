const telnet = require('net');
const WebSocketServer = require('ws');
const uuid = require('node-uuid');


// WebSocket-сервер на порту 8081
var webSocketServer = new WebSocketServer.Server({
	port: 8081
});


// Телнет-сервер на порту 1337
var newTelnetSocket = function (telnetSocket) {
	telnetSocket.write('Welcome to the Telnet server!\n Write me anything.'); // Приветствуем клиента, подключившегося по телнету.

	telnetSocket.on('error', function (err) {
		console.log(err);
	});


	// обрабатываем веб-клиентов
	var webSocketClients = {};

	webSocketServer.on('connection', function (ws) {
		console.log(ws);
		var id = uuid.v4();
		webSocketClients[id] = ws;
		console.log("новое соединение " + id);

		// ws.on('message', function(message) {
		//   console.log('получено сообщение ' + message);
		//
		//   for (var key in webSocketClients) {
		//     webSocketClients[key].send(message);
		//   }
		// });

		telnetSocket.on('data', function (data) {
			console.log(data.toString());

			for (var key in webSocketClients) {
				webSocketClients[key].send(data.toString());
			}
		});

		ws.on('close', function () {
			console.log('соединение закрыто ' + id);
			delete webSocketClients[id];
		});
	});


};

// Create a new server and provide a callback for when a connection occurs
var server = telnet.createServer(newTelnetSocket);

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

