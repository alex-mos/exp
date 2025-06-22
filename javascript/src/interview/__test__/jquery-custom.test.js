/**
 * @jest-environment jsdom
 */

import { jQuery } from "../jquery-custom"

describe("jquery-custom", () => {
  test("main", () => {
    document.body.innerHTML = '<div><ul class="js-node"></ul></div>'

    const node = jQuery(".js-node")

    node
      .addClass("node")
      .toggleClass("item")
      .removeClass("node")
      .css({
        color: "red",
        paddingTop: "10px",
      })
      .html("<li>hello</li>")

    expect(node.outerHTML).toBe(
      '<ul class="js-node item" style="color: red; padding-top: 10px;"><li>hello</li></ul>',
    )
  })
})
