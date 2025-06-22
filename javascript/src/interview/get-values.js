Object.prototype.getValues = function (...args) {
  let values = []

  if (args.length > 1) {
    values = getValuesByKeysArray(this, args)
  }

  if (args.length === 1 && typeof args[0] === "string") {
    const keys = args[0].split(" ")
    values = getValuesByKeysArray(this, keys)
  }

  if (args.length === 1 && Array.isArray(args[0])) {
    const keys = args[0]
    values = getValuesByKeysArray(this, keys)
  }

  return values.join(" ")
}

const getValuesByKeysArray = (obj, keys) => {
  const values = []

  keys.forEach((key) => {
    if (obj[key]) {
      values.push(obj[key])
    }
  })

  return values
}
