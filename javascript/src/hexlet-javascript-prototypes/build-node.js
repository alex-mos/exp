import SingleTag from "./single-tag"
import PairedTag from "./paired-tag"

/*
  Принимает ноду AST, проверяет, содержит ли она одиночный тег или парный, и инстанцирует экземпляр соответствующего класса.
  Является вспомогательной функцией функции parse.
*/
export function buildNode({ name, attributes, body, children }) {
  const singleTags = ["br", "hr", "img"]

  if (singleTags.includes(name)) {
    return new SingleTag(name, attributes)
  } else {
    return new PairedTag(name, attributes, body, children)
  }
}
