var msgText = 'Серёга: 12, Яков: 15';

var sergeyRegex = /(сергей|серёга|серёжа)\s?(:|-)\s?\d+/i;
var yakovRegex = /(яков|яша)(:|-)\s{0,1}\d+/i;

if (msgText.match(yakovRegex) && msgText.match(sergeyRegex)) {
	var yakovString = msgText.match(yakovRegex)[0];
	var yakovScore = parseInt(yakovString.match(/\d+/)[0]);

	var sergeyString = msgText.match(sergeyRegex)[0];
	var sergeyScore = parseInt(sergeyString.match(/\d+/)[0]);

	console.log('Играем');

} else {
	console.log('Невалидной фигни понаписали. Почитайте /help и повторите.');
}


console.log(yakovString);

console.log(yakovScore);

