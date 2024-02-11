import Node from './Node'

export default function PairedTag(name, attributes = {}, body = '', children = []) {
  this.name = name
  this.attributes = attributes
  this.body = body
  this.children = children
}

PairedTag.prototype = Object.create(Node.prototype)

PairedTag.prototype.toString = function() {
  const value = this.children.length > 0 ? this.children.join('') : this.body
  return `<${this.name}${this.getAttributesAsLine()}>${value}</${this.name}>`
}
