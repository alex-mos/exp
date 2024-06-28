import { convertHTML } from "../convert-html-entities"

describe("convertHTML", () => {
  test("basic test", () => {
    expect(convertHTML("Dolce & Gabbana")).toBe("Dolce &amp; Gabbana")
    expect(convertHTML("Hamburgers < Pizza < Tacos")).toBe(
      "Hamburgers &lt; Pizza &lt; Tacos",
    )
    expect(convertHTML("Sixty > twelve")).toBe("Sixty &gt; twelve")
    expect(convertHTML('Stuff in "quotation marks"')).toBe(
      "Stuff in &quot;quotation marks&quot;",
    )
    expect(convertHTML("Schindler's List")).toBe("Schindler&apos;s List")
    expect(convertHTML("<>")).toBe("&lt;&gt;")
    expect(convertHTML("abc")).toBe("abc")
  })
})
