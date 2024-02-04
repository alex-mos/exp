import { parse } from "./parse"
import SingleTag from "./SingleTag"
import PairedTag from "./PairedTag"

describe("index", () => {
  test("parse set 1", () => {

    const data = [
      "html",
      [
        [
          "body",
          [
            ["h2", { class: "header" }, "first header"],
            ["img", { class: "picture", src: "smile.jpg" }],
            [
              "div",
              [
                ["p", "hello, world"],
                ["p", "good bye, world"],
                [
                  "a",
                  { class: "link", href: "https://hexlet.io" },
                  "hexlet.io",
                ],
              ],
            ],
          ],
        ],
      ],
    ]

    const ast = parse(data)

    const expected = new PairedTag(
      "html",
      {},
      "",
      [
        new PairedTag(
          "body",
          {},
          "",
          [
            new PairedTag(
              "h2",
              { class: "header" },
              "first header",
              [],
            ),
            new SingleTag(
              "img",
              { class: "picture", src: "smile.jpg" },
            ),
            new PairedTag(
              "div",
              {},
              "",
              [
                new PairedTag(
                  "p",
                  {},
                  "hello, world",
                  [],
                ),
                new PairedTag(
                  "p",
                  {},
                  "good bye, world",
                  [],
                ),
                new PairedTag(
                  "a",
                  { class: "link", href: "https://hexlet.io" },
                  "hexlet.io",
                  [],
                ),
              ],
            ),
          ],
        ),
      ],
    )

    expect(JSON.stringify(ast)).toEqual(JSON.stringify(expected))
  })

  test("toString without single tag", () => {
    const data = [
      "html",
      [
        ["head", [["title", "hello, hexlet!"]]],
        [
          "body",
          { class: "container" },
          [
            ["h1", { class: "header" }, "html builder example"],
            ["div", [["span", "span text2"], ["br"]]],
          ],
        ],
      ],
    ]

    const ast = parse(data)
    const expected =
      '<html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span>span text2</span><br></div></body></html>'

    expect(ast.toString()).toBe(expected)
  })

  test("toString with single tag", () => {
    const data = [
      "html",
      [
        [
          "body",
          [
            ["h2", { class: "header" }, "first header"],
            ["img", { class: "picture", src: "smile.jpg" }],
            [
              "div",
              [
                ["p", "hello, world"],
                ["p", "good bye, world"],
                [
                  "a",
                  { class: "link", href: "https://hexlet.io" },
                  "hexlet.io",
                ],
              ],
            ],
          ],
        ],
      ],
    ]

    const ast = parse(data)
    const expected =
      '<html><body><h2 class="header">first header</h2><img class="picture" src="smile.jpg"><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>'

    expect(ast.toString()).toBe(expected)
  })
})
