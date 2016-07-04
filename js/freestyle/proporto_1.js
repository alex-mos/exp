// Допишите функцию так, чтобы метод get() вернул сумму свойств a и b:

function A() {
  this.a = 1;
}

function B() {
  this.b = 1;
  this.get = function(b) {
    console.log(this.a + this.b);
  };
}

B.prototype = A;

new B().get();
