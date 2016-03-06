var express = require('express');
var app = express();

var logger = require('./logger');
app.use(logger);

app.use(express.static('public')); // Middleware, задающее директорию для статических файлов.



app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.get('/blocks', function(req, res) {
	var blocks = [
		'Fixed',
		'Movable',
		'Rotating'
	];

	if (req.query.limit >= 0) {
		res.json(blocks.slice(0, req.query.limit));
	} else {
		res.json(blocks); // отдаёт объекты джейсоном.
	}
});

app.get('/blocks/:name', function(req, res) { // :name creates name property on the request.params object.

	var blocks = {
		'Fixed': 'Fastened securely in position',
		'Movable': 'Capable of being moved',
		'Rotating': 'Moving in a circle around its center'
	};

	var description = blocks[req.params.name];

	if (!description) {
		res.status('404').json(req.params.name + ' is not our element.');
	} else {
		res.json(description);
	}
});

app.get('/whole', function(req, res) {
	res.redirect('/parts'); // Делает 302 (temporarily) редирект.
});

app.get('/whole301', function(req, res) {
	res.redirect(301, '/parts'); // Делает 301 (permanent) редирект.
});



app.listen(3010, function(){
	console.log('Listening on port 3010');
});