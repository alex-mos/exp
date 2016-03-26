var phrases;

module.exports.connect = function () {
	phrases = require('./ru');
};

module.exports.getPhrase = function (name) {
	if (!phrases) {
		throw new Error('Нет такой фразы: ' + name);
	}
	return phrases[name];
};