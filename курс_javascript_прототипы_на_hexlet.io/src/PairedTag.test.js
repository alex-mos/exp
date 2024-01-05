import { parse } from "./parse"

describe("PairedTag", () => {
  test("paired tag class instance div with single tag child toString", () => {
    const data = ["div", {class: "wrapper"}, "", [["img", {src: "path/to/image.jpg", class: "hero", alt: "hero image"}]]]
    const ast = parse(data)
    expect(ast.toString()).toBe('<div class="wrapper"><img src="path/to/image.jpg" class="hero" alt="hero image"></div>')
  })

  test("paired tag class instance div with paired tag child toString", () => {
    const data = ["div", {class: "wrapper"}, "", [["div", {class: "inner"}, "text", []]]]
    const ast = parse(data)
    expect(ast.toString()).toBe('<div class="wrapper"><div class="inner">text</div></div>')
  })
})
