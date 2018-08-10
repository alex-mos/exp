class Map {
  constructor () {
    this.collection = {}
  }
  add(key, value) {
    this.collection[key] = value
  }
  remove(key) {
    delete this.collection[key]
  }
  get(key) {
    return this.collection[key]
  }
  has(key) {
    return !!this.collection[key]
  }
  values() {
    return Object.values(this.collection)
  }
  size() {
    return Object.keys(this.collection).length
  }
  clear() {
    this.collection = {}
  }
}
