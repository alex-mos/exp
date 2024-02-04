import Node from "./Node"

export default function PairedTag(name, attributes, body, children) {
  Node.apply(this, [name, attributes])
  this.body = body
  if (children.length) {
    this.children = children
  }

  this.toString = () => {
    return `<${this.name}${this.renderAttributes(this.attributes)}>${this.body}${this.children ? this.children.map(node => node.toString()).join("") : ""}</${this.name}>`
  }
}
