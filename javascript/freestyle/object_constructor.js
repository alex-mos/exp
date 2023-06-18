// конструктор
function Person(name, age, job) {
  this.name = name
  this.age = age
  this.job = job
  this.sayName = console.log(this.name)
}

var person1 = new Person('Nicolas', 29, 'Software Engineer')
var person2 = new Person('Alexander', 27, 'Maker up')
var person3 = new Person('Alexander', 27, 'Maker up')

console.log(person1.hasOwnProperty('name'))

