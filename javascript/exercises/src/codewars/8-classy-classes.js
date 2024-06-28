class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  get info() {
    return `${this.name}s age is ${this.age}.`
  }
}

/** * Usage ***/

var john = new Person("John", 34)

console.log(john.info)
