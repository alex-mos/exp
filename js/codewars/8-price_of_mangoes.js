/* my */
const mango = (qty, price) => ((qty - qty % 3) / 3 * 2 + qty % 3) * price

/* best */
const mango = (qty, price) => price * (qty - Math.floor(qty / 3))

/* test */
const assert = require('assert')
assert.equal(mango(3, 3), 6)
assert.equal(mango(9, 5), 30)
assert.equal(mango(5, 1), 4)
assert.equal(mango(5, 2), 8)
