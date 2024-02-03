export default class Node {
  constructor(name, attributes) {
    this.name = name
    this.attributes = attributes
  }

  renderAttributes(attributes) {
    let result = ""
    for (const [key, value] of Object.entries(attributes)) {
      result += ` ${key}="${value}"`
    }

    return result
  }
}
