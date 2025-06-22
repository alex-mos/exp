const assert = require("assert")

const color2grey = function (image) {
  return image.map((row) =>
    row.map((pixel) => {
      const sum = pixel.reduce((prev, current) => prev + current, 0)
      const avg = Math.round(sum / 3)
      return [avg, avg, avg]
    }),
  )
}

assert.deepEqual(
  color2grey([
    [
      [123, 231, 12],
      [56, 43, 124],
    ],
    [
      [78, 152, 76],
      [64, 132, 200],
    ],
  ]),
  [
    [
      [122, 122, 122],
      [74, 74, 74],
    ],
    [
      [102, 102, 102],
      [132, 132, 132],
    ],
  ],
)
