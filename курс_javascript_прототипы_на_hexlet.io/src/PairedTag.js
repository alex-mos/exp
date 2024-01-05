export default class PairedTag {
  constructor(name, attributes, body, children) {
    this.name = name,
    this.attributes = attributes
    this.body = body
    if (children.length) {
      this.children = children
    }
  }

  toString() {
    return `<${this.name}${this.renderAttributes(this.attributes)}>${
          this.body
        }${this.children ? this.children.map(node => node.toString()).join("") : ""}</${this.name}>`
  }

  renderAttributes(attributes) {
    let result = ""
    for (const [key, value] of Object.entries(attributes)) {
      result += ` ${key}="${value}"`
    }

    return result
  }
}
