import Node from "./Node"

export default class PairedTag extends Node {
  constructor(name, attributes, body, children) {
    super(name, attributes)
    this.body = body
    if (children.length) {
      this.children = children
    }
  }

  toString() {
    return `<${this.name}${this.renderAttributes(this.attributes)}>${this.body}${this.children ? this.children.map(node => node.toString()).join("") : ""}</${this.name}>`
  }
}
