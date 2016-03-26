var User = require('./user');

var log = require('./logger')(module);

var db = require('./db');
db.connect();

var run = function () {
	var vasya = new User('Вася');
	var petya = new User('Петя');

	vasya.hello(petya);

	log(db.getPhrase('Run successful'));
};

// Если этот файл подключен как модуль, экспортируем функцию. Если запущен сам — исполняем.
if (module.parent) {
	module.exports.run = run;
} else {
	run();
}