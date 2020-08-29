class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.length = 0
    this._head = null
  }
  add(element) {
    if (!this._head) {
      this._head = new Node(element)
    } else {
      let currentNode = this._head
      while (currentNode.next) {
        currentNode = currentNode.next
      }
      currentNode.next = new Node(element)
    }
    this.length++
  }
  remove(element) {
    let currentNode = this._head
    let previousNode
    if (currentNode.element === element) { // если удяляемый элемент находится в голове списка
      this._head = currentNode.next
    } else {
      while (currentNode.element !== element) {
        previousNode = currentNode
        currentNode = currentNode.next
      }
      previousNode.next = currentNode.next
    }
    this.length--
  }
  removeAt(targetIndex) {

  }
  head() {
    return this._head
  }
  size() {
    return this.length
  }
  isEmpty() {
    return this.length === 0
  }
  indexOf(element) {
    let result = -1
    let currentNode = this._head
    let index = 0
    while (currentNode) {
      if (currentNode.element === element) {
        result = index
      }
      index++
      currentNode = currentNode.next
    }
    return result
  }
  elementAt(targetIndex) {
    let result
    let currentNode = this._head
    let index = 0
    while (currentNode) {
      if (index === targetIndex) {
        result = currentNode.element
      }
      index++
      currentNode = currentNode.next
    }
    return result
  }
}

const ll = new LinkedList()

ll.add('Kitten')
ll.add('Puppy')
ll.removeAt(1)
ll.add('Cat')
ll.add('Dog')
ll.add('Hog')


console.log(ll.size())
console.log(ll.head())

console.log(ll.indexOf('Kitten'))
console.log(ll.indexOf('Dog'))
console.log(ll.indexOf('Puppy'))
console.log(ll.indexOf('Hog'))
console.log(ll.elementAt(1))
