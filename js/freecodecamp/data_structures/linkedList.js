class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this.head = null
  }


  this.size

  get head() {
    return this.head
  }
  get size() {
    return this.length
  }
}

let Kitten = new Node('Kitten')
let Puppy = new Node('Puppy')
let Cat = new Node('Cat')
let Dog = new Node('Dog')

Kitten.next = Puppy
Puppy.next = Cat
Cat.next = Dog
