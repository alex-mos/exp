function Foo() {
	this.value = 42;
}
Foo.prototype = {
	method: function() { return 'la'}
};

// console.log(Foo.prototype);
// console.log(Foo.method);

var lol = new Foo();

console.log(lol.method());

function Bar() {}

// Set Bar's prototype to a new instance of Foo
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

console.log(Bar.foo);

// console.log(Bar.prototype);
// console.log(Bar);

// Make sure to list Bar as the actual constructor
Bar.prototype.constructor = Bar;

// console.log(Bar.prototype.constructor);

var test = new Bar(); // create a new bar instance

// The resulting prototype chain
// test [instance of Bar]
//     Bar.prototype [instance of Foo]
//     { foo: 'Hello World' }
//         Foo.prototype
//         { method: ... }
//             Object.prototype
//             { toString: ... /* etc. */ }

// console.log(test.method()); // la
// console.log(test.foo);