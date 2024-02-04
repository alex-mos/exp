import Node from "./Node"

export default function SingleTag(name, attributes) {
  Node.apply(this, [name, attributes])

  this.toString = () => {
    return `<${this.name}${this.renderAttributes(this.attributes || {})}>`
  }
}
