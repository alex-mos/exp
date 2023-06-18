/* my */
const mango = (qty, price) => ((qty - qty % 3) / 3 * 2 + qty % 3) * price

/* best */
// const mango = (qty, price) => price * (qty - Math.floor(qty / 3))

module.exports = {
  mango
}
