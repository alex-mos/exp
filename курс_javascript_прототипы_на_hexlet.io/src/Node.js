export default function Node(name, attributes = {}) {
  this.name = name
  this.attributes = attributes

  this.getAttributesAsLine = () => {
    const attrs = Object.entries(this.attributes).map(([key, value]) => `${key}="${value}"`)
    return attrs.length > 0 ? ` ${attrs.join(' ')}` : ''
  }
}
