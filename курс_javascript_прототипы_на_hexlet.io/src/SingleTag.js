import Node from './Node'

export default function SingleTag(name, attributes = {}) {
  this.name = name
  this.attributes = attributes
}

SingleTag.prototype = Object.create(Node.prototype)

SingleTag.prototype.toString = function() {
  return `<${this.name}${this.getAttributesAsLine()}>`
}
