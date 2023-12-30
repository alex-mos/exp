import { render, parse } from "./index"

describe("buildHtml", () => {
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

    const actual = parse(data)

    const expected = {
      name: "html",
      attributes: {},
      body: "",
      children: [
        {
          name: "body",
          attributes: {},
          body: "",
          children: [
            {
              name: "h2",
              attributes: { class: "header" },
              body: "first header",
              children: [],
            },
            {
              name: "img",
              attributes: { class: "picture", src: "smile.jpg" },
              body: "",
              children: [],
            },
            {
              name: "div",
              attributes: {},
              body: "",
              children: [
                {
                  name: "p",
                  attributes: {},
                  body: "hello, world",
                  children: [],
                },
                {
                  name: "p",
                  attributes: {},
                  body: "good bye, world",
                  children: [],
                },
                {
                  name: "a",
                  attributes: { class: "link", href: "https://hexlet.io" },
                  body: "hexlet.io",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    }

    expect(actual).toStrictEqual(expected)
  })

  test("render set 1", () => {
    {
      const data = {
        name: "html",
        attributes: {},
        body: "",
        children: [
          {
            name: "body",
            attributes: {},
            body: "",
            children: [
              {
                name: "h2",
                attributes: { class: "header" },
                body: "first header",
                children: [],
              },
              {
                name: "img",
                attributes: { class: "picture", src: "smile.jpg" },
                body: "",
                children: [],
              },
              {
                name: "div",
                attributes: {},
                body: "",
                children: [
                  {
                    name: "p",
                    attributes: {},
                    body: "hello, world",
                    children: [],
                  },
                  {
                    name: "p",
                    attributes: {},
                    body: "good bye, world",
                    children: [],
                  },
                  {
                    name: "a",
                    attributes: { class: "link", href: "https://hexlet.io" },
                    body: "hexlet.io",
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      }

      const actual = render(data)
      const expected =
        '<html><body><h2 class="header">first header</h2><img class="picture" src="smile.jpg"><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>'
      expect(actual).toBe(expected)
    }
  })

  test("full set 1", () => {
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

    const actual = render(parse(data))
    const expected =
      '<html><head><title>hello, hexlet!</title></head><body class="container"><h1 class="header">html builder example</h1><div><span>span text2</span><br></div></body></html>'
    expect(actual).toBe(expected)
  })

  test("full set 2", () => {
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

    const actual = render(parse(data))
    const expected =
      '<html><body><h2 class="header">first header</h2><img class="picture" src="smile.jpg"><div><p>hello, world</p><p>good bye, world</p><a class="link" href="https://hexlet.io">hexlet.io</a></div></body></html>'
    expect(actual).toBe(expected)
  })
})
