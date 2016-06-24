class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Polygon(10, 10);

console.log(`square area: ${square.area}`);


/** Static methods **/

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.sqrt(dx * dx + dy * dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(`point distance: ${Point.distance(p1, p2)}`);

/** Extends **/

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}


/** Super class call **/

class Lion extends Animal {
  speak() {
    super.speak(); // Вызов функции родительского класса.
    return `${this.name} roars.`;
  }
}

const simba = new Lion('Simba');

console.log(simba.speak());


