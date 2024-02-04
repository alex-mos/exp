export default function Node(name, attributes) {
  this.name = name
  this.attributes = attributes


  this.renderAttributes = (attributes) => {
    let result = ""
    for (const [key, value] of Object.entries(attributes)) {
      result += ` ${key}="${value}"`
    }

    return result
  }
}
