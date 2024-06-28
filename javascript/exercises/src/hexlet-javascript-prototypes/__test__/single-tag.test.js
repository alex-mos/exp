import SingleTag from "../single-tag"

describe("SingleTag", () => {
  test("single tag class instance br", () => {
    const tag = new SingleTag("br")
    expect(tag.toString()).toBe("<br>")
  })

  test("single tag class instance img", () => {
    const tag = new SingleTag("img", {})
    expect(tag.toString()).toBe("<img>")
  })

  test("single tag class instance img with attributes", () => {
    const tag = new SingleTag("img", {
      src: "path/to/image.jpg",
      class: "hero",
      alt: "hero image",
    })
    expect(tag.toString()).toBe(
      '<img src="path/to/image.jpg" class="hero" alt="hero image">',
    )
  })
})
