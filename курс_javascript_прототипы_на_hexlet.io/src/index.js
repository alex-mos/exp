export function parse(data) {
  const node = {
    name: data[0],
    attributes: {},
    body: "",
    children: [],
  }

  for (const block of data.slice(1)) {
    // body
    if (typeof block === "string") {
      node.body = block
    }

    // children
    else if (block instanceof Array) {
      for (const element of block) {
        node.children.push(parse(element))
      }
    }

    // attributes
    else if (block instanceof Object) {
      node.attributes = block
    }
  }

  return node
}

export function render(node) {
  const singleTags = ["br", "hr", "img"]

  let result = ""

  if (singleTags.includes(node.name)) {
    result = `<${node.name}${renderAttributes(node.attributes)}>`
  } else {
    result = `<${node.name}${renderAttributes(node.attributes)}>${
      node.body
    }${node.children.map((child) => render(child)).join("")}</${node.name}>`
  }

  return result
}

function renderAttributes(attributes) {
  let result = ""
  for (const [key, value] of Object.entries(attributes)) {
    result += ` ${key}="${value}"`
  }

  return result
}
