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

  add(element) {
    if (this.head) {
      for (let i = this.head.next; i; i= this.head.next) {

      }

    } else {
      this.head =
    }
  }
  get head() {
    return this.head
  }
  get size() {
    return this.length
  }
}


let ll = new LinkedList()


ll.add('Репка')
ll.add('Дед')
ll.add('Бабка')
ll.add('Внучка')
ll.add('Собака')
ll.add('Кошка')
ll.add('Мышь')

ll.size()