/** Represents a Machine
 *  @constructor
 *  @param {number} power - The consumed power.
 */
function Machine(power) {
  this._power = power;
  this._enabled = false;

  this.enable = function() {
    this._enabled = true;
  };

  this.disable = function() {
    this._enabled = false;
  };
}

/** Represents a CoffeMachine
 *  @constructor
 *  @param {number} power - The consumed power.
  */
function CoffeeMachine(power) {
  Machine.apply(this, arguments); // унаследовать родительский контекст с передачей ему всех аргументов.

  this._waterAmount = 0;

  var parentEnable = this.enable;

  this.enable = function() {
    parentEnable.call(this);
    this.run();
  }

  this.setWaterAmount = function(amount) {
    this._waterAmount = amount;
  };
}

/** Represents a fridge
 * @constructor
 * @param {number} power - The consumed power.
 */
function Fridge(power) {
  Machine.apply(this, arguments);

  this._temperature = -3;

  this.freeze = function() {
    this._temperature -= 10;
  };

  this.getTemperature = function() {
    return this._temperature;
  };
}

var coffeeMachine = new CoffeeMachine(10000);

coffeeMachine.enable();
coffeeMachine.setWaterAmount(100);
coffeeMachine.disable();

var samsung = new Fridge();

console.log(samsung.getTemperature());
samsung.freeze();
console.log(samsung.getTemperature());
