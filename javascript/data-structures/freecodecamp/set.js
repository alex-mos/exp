class Set {
  constructor(arr) {
    this.set = []
    if (arr) {
      arr.forEach((item) => this.add(item))
    }
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
    const resultSet = new Set(this.values())
    for (const item of secondSet.values()) {
      resultSet.add(item)
    }
    return resultSet
  }
  intersection(secondSet) {
    return this.set.filter((item) => secondSet.values().includes(item))
  }
  difference(secondSet) {
    const resultSet = new Set()
    this.set.forEach((item) => {
      if (!secondSet.has(item)) {
        resultSet.add(item)
      }
    })
    secondSet.values().forEach((item) => {
      if (!this.set.includes(item)) {
        resultSet.add(item)
      }
    })
    return resultSet
  }
  subset(secondSet) {
    return this.set.every((item) => secondSet.values().includes(item))
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

module.exports = Set
