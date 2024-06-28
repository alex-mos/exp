var add = function (a, b) {
  if (typeof a != "number" || typeof b != "number") {
    throw {
      name: "TypeError",
      message: "Add needs numbers",
    }
  }
  return a + b
}

var tryIt = function () {
  try {
    add(1 + "two")
  } catch (e) {
    console.log(e.name + ": " + e.message)
  }
}

tryIt()
