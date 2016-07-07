"use strict";

function CoffeeMachine(power, capacity) {
	const WATER_HEAT_CAPACITY = 4200; // Физическая константа - удельная теплоемкость воды для getBoilTime
	var waterAmount = 0; // количество воды в кофеварке
	var self = this;

	// расчёт времени до кипячения
	var getBoilTime = function () {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	};

	// сеттер для заливки воды
	this.setWaterAmount = function (amount) {
		if (amount < 0) {
			throw new Error('Значение должно быть положительным.');
		}
		if (amount > capacity) {
			throw new Error('Нельзя налить воды больше, чем ' + capacity);
		}

		waterAmount = amount;
	};

	// геттер для получения количества воды
	this.getWaterAmount = function () {
		return waterAmount;
	};

	// что делать по окончании процесса
	var onReady = function () {
		console.log('Кофе готов!');
	};

	this.run = function () {
		setTimeout(onReady, getBoilTime())
	};

	console.log( 'Создана кофеварка мощностью: ' + power + ' ватт и вместительностью ' + capacity + ' миллилитров.' );
}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100000, 2500);

// залить воды
coffeeMachine.setWaterAmount(1500);
console.log('В кофеварке ' + coffeeMachine.getWaterAmount() + ' мл. воды');

// console.log(coffeeMachine);

coffeeMachine.run();