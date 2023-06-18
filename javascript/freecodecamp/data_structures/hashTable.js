class HashTable {
  constructor() {
    this.collection = []
  }

  static hash(string) {
    let hash = ''
    for (let i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i)
    }
    return hash
  }
  add(key, value) {
    this.collection[HashTable.hash(key)] = value
  }
  remove(key) {
    const result = this.collection[HashTable.hash(key)]
    this.collection[HashTable.hash(key)] = null
    return result
  }
  lookup(key) {
    return this.collection[HashTable.hash(key)]
  }
  print() {
    return this.collection
  }
}
