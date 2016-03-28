var min = 1;
var max = 100;
var rightNumber = 78; // Число, которое загадал Загадочник.

// Загадочник
var riddler = (guess) => {
	if (guess == rightNumber) {
		console.log('Загадочник: Угадал. Я загадал ' + rightNumber);
		return true;
	} else if (guess < rightNumber) {
		console.log('Загадочник: Больше.');
		return('more');
	} else if (guess > rightNumber) {
		console.log('Загадочник: Меньше.');
		return('less');
	}
};



// Отгадочник
var guessNumber = (min, max) => {
	// Логика, по которой отгадочник делает предположение.
	return Math.round(min + max / 2);
};

var riddlerAnswerHandler = (answer) => {
	if (answer === true) {
		// Если угадал, то игра заканчивается.
		return true;

	} else if (answer === 'more') {
		// Если число Загадочника больше того, что предположил Отгадочник, то пробуем среднее из большей половины.
		min = guessNumber(min, max);
		console.log('Отгадочник: ' + guessNumber(min, max) + '?');
		riddler(min, max);

	} else if (answer === 'less') {
		// Если число Загадочника меньше того, что предположил Отгадочник, то пробуем среднее из меньшей половины.
		max = guessNumber(min, max);
		console.log('Отгадочник: ' + guessNumber(min, max) + '?');
		riddler(min, max);
	}
};

var guesser = (min, max) => {
		// Отгадочник говорит Загадочнику своё первое предположение.
		console.log('Отгадочник: ' + guessNumber(min, max) + '?');
		riddlerAnswerHandler(riddler(guessNumber(min, max)));
};


// Начало игры.
console.log('Загадочник: Я загадал число от ' + min + ' до ' + max + '. Сможешь его угадать?');

// Отгадочник делает первую попытку.
guesser(min, max);