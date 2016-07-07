var person = new Object();
person.name = 'Alexander';
person.age = 29;
person.job = 'Software Engineer';
person.sayName = function(){
    console.log(this.name);
};

person.sayName();