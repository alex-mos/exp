var person = {
    name: 'Alexander',
    age: 29,
    job: 'Software Engineer',
    sayName: function () {
        console.log(this.name);
    }
};

person.sayName();