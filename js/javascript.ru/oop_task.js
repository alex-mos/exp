function CoffeeMachine(power) {
	const WATER_HEAT_CAPACITY = 4200;
	this.waterAmount = 0;
	var self = this;
	
	function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
	}

	function onReady() {
		console.log( 'Кофе готов!' );
	}

	this.run = function() {
		this.timerId = setTimeout(onReady, getBoilTime());
	};
	
	this.stop = function () {
		clearTimeout(this.timerId);
	}
}

var coffeeMachine = new CoffeeMachine(50000);
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
coffeeMachine.stop(); // кофе приготовлен не будет