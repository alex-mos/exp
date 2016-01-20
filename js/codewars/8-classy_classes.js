"use strict";

/* My */

//class Person {
//	constructor(name, age) {
//		this.name = name;
//		this.age = age;
//		this.getInfo = function() {
//			return this.name + 's age is ' + this.age;
//		};
//		this.info = this.getInfo();
//	}
//}

/*** Best ***/

class Person {
	constructor(name,age) {
		this.name = name;
		this.age = age;
	}

	get info() {
		return this.name + "s age is " + this.age;
	}
}

/*** Usage ***/

var john = new Person('john', 34);

console.log(john.info);