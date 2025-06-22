/*
  Formats text width to passed value.
*/
export function format(text, width) {
  const stringArray = []
  let i = 0
  while (i < text.length) {
    let slice = text.slice(i, i + width)
    if (slice.length === width) {
      slice = slice.slice(0, slice.lastIndexOf(" "))
    }

    stringArray.push(slice.trim())

    i += slice.length
  }

  return stringArray.join("\n")
}
