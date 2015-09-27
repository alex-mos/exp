// Пример создания объекта с помощью прототипного наследования.

function Person(){}

Person.prototype.name = 'Alexander';
Person.prototype.age = 27;
Person.prototype.job = 'Software Engineer';
Person.prototype.sayName = function(){
    console.log(this.name);
};

var person1 = new Person();

console.log(person1.job);

// Проверка на собственное свойство.
console.log(person1.hasOwnProperty('job')); // False
person1.job = 'janitor';
console.log(person1.hasOwnProperty('job')); // True

// Проверка, создан ли объект данным конструктором.
console.log(person1 instanceof Person); // True
var a = 1;
console.log(a instanceof Person); // False
