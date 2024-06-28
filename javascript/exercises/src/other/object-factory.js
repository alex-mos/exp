// фабрика
function createPerson(name, age, job) {
  const o = new Object()
  o.name = name
  o.age = age
  o.job = job
  o.sayName = function () {
    console.log(this.name)
  }
  return o
}

var person1 = createPerson("Nicolas", 29, "Software Engineer")
var person2 = createPerson("Alexander", 27, "HTML-man")
var person3 = createPerson("Pavel", 20, "php-developer")

console.log(person1.hasOwnProperty("name"))
