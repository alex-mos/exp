class Set {
  constructor () {
    this.set = []
  }
  add(item) {
    if (this.set.includes(item)) {
      return false
    }
    this.set.push(item)
    return true
  }
  remove(item) {
    if (this.set.includes(item)) {
      this.set.splice(this.set.indexOf(item), 1)
      return true
    }
    return false
  }
  union(secondSet) {
    for (let item of secondSet.values()) {
      if (!this.set.includes(item)) {
        this.set.push(item)
      }
    }
    return this.values()
  }
  has(item) {
    return this.set.includes(item)
  }
  values() {
    return this.set
  }
  size() {
    return this.set.length
  }
}




let s = new Set()
console.log(s)
console.log(s.add('a'))
console.log(s.add('b'))
console.log(s.add('c'))

let s2 = new Set()
console.log(s2.add('c'))
console.log(s2.add('e'))
console.log(s2.add('d'))

console.log(s.union(s2))
console.log(s.values())