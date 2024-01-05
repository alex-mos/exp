export default class SingleTag {
  constructor(name, attributes) {
    this.name = name,
    this.attributes = attributes || {}
  }

  toString() {
    return `<${this.name}${this.renderAttributes(this.attributes)}>`
  }

  renderAttributes(attributes) {
    let result = ""
    for (const [key, value] of Object.entries(attributes)) {
      result += ` ${key}="${value}"`
    }

    return result
  }
}
