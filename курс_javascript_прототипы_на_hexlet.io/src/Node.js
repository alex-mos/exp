export default function Node() {}

Node.prototype.getAttributesAsLine = function() {
  const attrs = Object.entries(this.attributes).map(([key, value]) => `${key}="${value}"`)
  return attrs.length > 0 ? ` ${attrs.join(' ')}` : ''
}
