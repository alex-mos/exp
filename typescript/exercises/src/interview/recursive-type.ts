/*
  Типизировать объект nodes.
  Написать функцию getNodesNames, которая рекурсивно проходит по объекту
  и возвращает массив имён.
*/

export type INode = {
  id: number
  name: string
  children: INode[]
}

export function getNodesNames (nodes: INode[]): string[] {
  return nodes.flatMap(node => {
    if (node.children.length) {
      return [node.name, ...getNodesNames(node.children)]
    } else {
      return [node.name]
    }
  })
}
