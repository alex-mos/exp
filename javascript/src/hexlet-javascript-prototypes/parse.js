import { buildNode } from "./build-node"

/*
  Принимает описание дерева HTML в DSL, возвращает это дерево в виде AST.
*/
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

  return buildNode(node)
}
