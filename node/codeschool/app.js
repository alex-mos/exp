var express = require('express');
var app = express();

app.use(express.static('public')); // Middleware, задающее директорию для статических файлов.

var logger = require('./logger');
app.use(logger);

var bodyParser = require('body-parser'); // Middleware для парсинга тела post-запроса.
var parseUrlencoded = bodyParser.urlencoded({ extended: false }); // параметр заставляет приложение использовать стандартный модуль ноды — querystring.

// Функция, нормализующая параметр name перед использованием в роутере.
app.param('name', function(req, res, next) {
	var name = req.params.name;
	req.blockName = name[0].toUpperCase() + name.slice(1).toLowerCase();
	next();
});

var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

app.get('/', function(req, res) {
	res.sendFile('index.html');
});

app.get('/blocks', function(req, res) {
	if (req.query.limit >= 0) {
		res.json(Object.keys(blocks).slice(0, req.query.limit)); // Object.keys(blocks) создаёт массив ключей объекта.
	} else {
		res.json(Object.keys(blocks)); // отдаёт объекты джейсоном.
	}
});

app.post('/blocks', parseUrlencoded, function(req, res) {
	var newBlock = req.body;
	blocks[newBlock.name] = newBlock.description;

	res.status(201).json(newBlock.name);
});

app.delete('/blocks/:name', function(req, res) {
	delete blocks[req.blockName];
	res.sendStatus(200);
});

app.get('/blocks/:name', function(req, res) { // :name creates name property on the request.params object.
	var description = blocks[req.blockName];

	if (!description) {
		res.status('404').json(req.params.name + ' is not our element.');
	} else {
		res.json(description);
	}
});

app.get('/whole302', function(req, res) {
	res.redirect('/parts'); // Делает 302 (temporarily) редирект.
});

app.get('/whole301', function(req, res) {
	res.redirect(301, '/parts'); // Делает 301 (permanent) редирект.
});



app.listen(3010, function(){
	console.log('Listening on port 3010');
});