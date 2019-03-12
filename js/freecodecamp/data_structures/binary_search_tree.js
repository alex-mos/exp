import assert from 'assert'

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor () {
    this.root = null
  }

  add (value) {
    const node = this.root
    if (node) {
      const searchTree = function (node) {
        if (value < node.value) {
          if (node.left) {
            searchTree(node.left)
          } else {
            node.left = new Node(value)
            return null
          }
        } else if (value > node.value) {
          if (node.right) {
            searchTree(node.right)
          } else {
            node.right = new Node(value)
            return null
          }
        } else {
          return null
        }
      }
      searchTree(node)
    } else {
      this.root = new Node(value)
    }
  }

  remove (value) {

  }

  isPresent (value) {
    let node = this.root
    while (node) {
      if (value > node.value) {
        node = node.right
      } else if (value < node.value) {
        node = node.left
      } else {
        return true
      }
    }
    return false
  }

  findMin () {
    let node = this.root
    while (node) {
      if (node.left) {
        node = node.left
      } else {
        return node.value
      }
    }
    return null
  }

  findMax () {
    let node = this.root
    while (node) {
      if (node.right) {
        node = node.right
      } else {
        return node.value
      }
    }
    return null
  }

  findMinHeight () {

  }

  findMaxHeight () {

  }
}

let displayTree = tree => console.log(JSON.stringify(tree, null, 2))

let tree = new BinarySearchTree()

tree.add(5)
tree.add(3)
tree.add(2)
tree.add(8)
tree.add(4)
tree.add(9)
tree.add(9)


assert.equal(tree.findMin(), 2)
assert.equal(tree.findMax(), 9)
assert(tree.isPresent(9))
assert(!tree.isPresent(12))
