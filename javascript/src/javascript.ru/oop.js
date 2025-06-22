function CoffeeMachine(power) {
  const self = this

  this.waterAmount = 0 // количество воды в кофеварке

  // Физическая константа - удельная теплоемкость воды для getBoilTime
  const WATER_HEAT_CAPACITY = 4200

  // расчёт времени до кипячения
  const getBoilTime = function () {
    return (self.waterAmount * WATER_HEAT_CAPACITY * 80) / power
  }

  // что делать по окончании процесса
  const onReady = function () {
    console.log("Кофе готов!")
  }

  this.run = function () {
    setTimeout(onReady, getBoilTime())
  }

  console.log(`Создана кофеварка мощностью: ${power} ватт`)
}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100000)

// залить воды
coffeeMachine.waterAmount = 200

console.log(coffeeMachine)
coffeeMachine.run()
