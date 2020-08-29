function Node(value) {
  this.value = value
  this.left = null
  this.right = null
}

function BinarySearchTree() {
  this.root = null

  this.add = function(value) {
    const node = this.root
    if (node) {
      const searchTree = function(node) {
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

  this.remove = function(value) {
    const node = this.root
    while (node) {

    }
  }

  this.isPresent = function(value) {
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

  this.findMin = function() {
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

  this.findMax = function() {
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

  /* Баланс */
  // Минимальная высота дерева — это расстояние от корня до ближайшей ноды, у которой меньше двух наследников.
  this.findMinHeight = function() {

  }

  this.findMaxHeight = function() {
    const node = this.root
    const maxHeight = -1
  }

  this.isBalanced = function() {

  }

  /* Траверсинг
        9
     /     \
    4      17
   / \    / \
  3   6  10 22
     / \    /
    5   7  20
  */

  // 3,4,5,6,7,9,10,17,20,22
  this.inOrder = function() {
    if (this.root) {
      const result = []
      const traverseInOrder = function(node) {
        node.left && traverseInOrder(node.left)
        result.push(node.value)
        node.right && traverseInOrder(node.right)
      }
      traverseInOrder(this.root)
      return result
    } else {
      return null
    }
  }
  // 9,4,3,6,5,7,17,10,22,20
  this.preOrder = function() {
    if (this.root) {
      const result = []
      const traversePreOrder = function(node) {
        result.push(node.value)
        node.left && traversePreOrder(node.left)
        node.right && traversePreOrder(node.right)
      }
      traversePreOrder(this.root)
      return result
    } else {
      return null
    }
  }
  // 3,5,7,6,4,10,20,22,17,9
  this.postOrder = function() {
    if (this.root) {
      const result = []
      const traversePostOrder = function(node) {
        node.left && traversePostOrder(node.left)
        node.right && traversePostOrder(node.right)
        result.push(node.value)
      }
      traversePostOrder(this.root)
      return result
    } else {
      return null
    }
  }
  // 9,4,17,3,6,10,22,5,7,20
  this.levelOrder = function() { }
}

const displayTree = (tree) => console.log(JSON.stringify(tree, null, 2))

const tree = new BinarySearchTree()
tree.add(9)
tree.add(4)
tree.add(17)
tree.add(3)
tree.add(6)
tree.add(10)
tree.add(22)
tree.add(5)
tree.add(7)
tree.add(20)

const tree2 = new BinarySearchTree()
/*
        7
       / \
      6  10
     /
    4
   /
  2
*/
tree2.add(7)
tree2.add(6)
tree2.add(4)
tree2.add(2)
tree2.add(10)

assert.equal(tree.findMin(), 3)
assert.equal(tree.findMax(), 22)
assert(tree.isPresent(9))
assert(!tree.isPresent(12))
assert.deepEqual(tree.inOrder(), [3, 4, 5, 6, 7, 9, 10, 17, 20, 22])
assert.deepEqual(tree.preOrder(), [9, 4, 3, 6, 5, 7, 17, 10, 22, 20])
assert.deepEqual(tree.postOrder(), [3, 5, 7, 6, 4, 10, 20, 22, 17, 9])
// assert.deepEqual(tree.levelOrder(), [9, 4, 17, 3, 6, 10, 22, 5, 7, 20])
assert.equal(tree.findMinHeight(), 2)
assert.equal(tree.findMaxHeight(), 3)
assert(tree.isBalanced())
assert.equal(tree2.findMinHeight(), 1)
assert.equal(tree2.findMaxHeight(), 3)
assert(!tree2.isBalanced())
