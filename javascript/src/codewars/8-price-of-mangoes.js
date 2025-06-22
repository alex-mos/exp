/* my */
export const mango = (quantity, price) =>
  (((quantity - (quantity % 3)) / 3) * 2 + (quantity % 3)) * price

/* best */
// export const mango = (quantity, price) => price * (quantity - Math.floor(quantity / 3))
