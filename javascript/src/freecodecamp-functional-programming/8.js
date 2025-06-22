import assert from "assert"

function nonMutatingSplice(cities) {
  let newCities = cities.slice()
  return newCities.slice(0, 3)
}

var inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"]
assert.deepEqual(nonMutatingSplice(inputCities), [
  "Chicago",
  "Delhi",
  "Islamabad",
])
