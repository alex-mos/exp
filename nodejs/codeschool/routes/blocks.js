var express = require('express');
var router = express.Router(); // Роутер, который можно использовать в app.js как middleware

var bodyParser = require('body-parser'); // Middleware для парсинга тела post-запроса.
var parseUrlencoded = bodyParser.urlencoded({ extended: false }); // параметр заставляет приложение использовать стандартный модуль ноды — querystring.

var blocks = {
	'Fixed': 'Fastened securely in position',
	'Movable': 'Capable of being moved',
	'Rotating': 'Moving in a circle around its center'
};

router.route('/')
	.get(function(req, res) {
		if (req.query.limit >= 0) {
			res.json(Object.keys(blocks).slice(0, req.query.limit)); // Object.keys(blocks) создаёт массив ключей объекта.
		} else {
			res.json(Object.keys(blocks)); // отдаёт объекты джейсоном.
		}
	})
	.post(parseUrlencoded, function(req, res) {
		var newBlock = req.body;
		blocks[newBlock.name] = newBlock.description;

		res.status(201).json(newBlock.name);
	});

router.route('/:name')
	.all(function(req, res, next){
		// Функция, нормализующая параметр name перед использованием в роутере.
		var name = req.params.name;
		req.blockName = name[0].toUpperCase() + name.slice(1).toLowerCase();
		next();
	})
	.get(function(req, res) { // :name creates name property on the request.params object.
		var description = blocks[req.blockName];

		if (!description) {
			res.status('404').json(req.params.name + ' is not our element.');
		} else {
			res.json(description);
		}
	})
	.delete(function(req, res) {
		delete blocks[req.blockName];
		res.sendStatus(200);
	});

module.exports = router;