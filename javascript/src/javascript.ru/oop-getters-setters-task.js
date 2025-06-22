function User() {
  this.setFirstName = function (firstName) {
    this.firstName = firstName
  }

  this.setSurname = function (surName) {
    this.surName = surName
  }

  this.getFullName = function () {
    return this.firstName + " " + this.surName
  }
}

var user = new User()
user.setFirstName("Петя")
user.setSurname("Иванов")

console.log(user.getFullName()) // Петя Иванов

// --- //

function CoffeeMachine1(power, capacity) {
  this.getPower = function () {
    return power
  }

  this.setWaterAmount = function (amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным")
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить воды больше, чем " + capacity)
    }

    waterAmount = amount
  }

  this.getWaterAmount = function () {
    return waterAmount
  }
}

var nespresso = new CoffeeMachine1(700, 1300)

console.log(nespresso.getPower())

// --- //

function CoffeeMachine2(power, capacity) {
  let waterAmount = 0

  const WATER_HEAT_CAPACITY = 4200

  function getTimeToBoil() {
    return (waterAmount * WATER_HEAT_CAPACITY * 80) / power
  }

  this.setWaterAmount = function (amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным")
    }
    if (amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity)
    }

    waterAmount = amount
  }

  this.addWater = function (amount) {
    if (amount < 0) {
      throw new Error("Значение должно быть положительным")
    }
    if (waterAmount + amount > capacity) {
      throw new Error("Нельзя залить больше, чем " + capacity)
    }

    waterAmount += amount
    console.log("Залито " + amount + " мл. воды")
  }

  function onReady() {
    alert("Кофе готов!")
  }

  this.run = function () {
    setTimeout(onReady, getTimeToBoil())
  }
}

var coffeeMachine = new CoffeeMachine2(100000, 400)
coffeeMachine.addWater(200)
coffeeMachine.addWater(100)
coffeeMachine.addWater(300) // Нельзя залить больше, чем 400
coffeeMachine.run()
