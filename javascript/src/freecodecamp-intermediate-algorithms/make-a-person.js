import assert from "assert"

let Person = function (firstAndLast) {
  let firstName = ""
  let lastName = ""

  this.getFirstName = function () {
    return firstName
  }

  this.getLastName = function () {
    return lastName
  }

  this.getFullName = function () {
    return `${firstName} ${lastName}`
  }

  this.setFirstName = function (first) {
    firstName = first
  }

  this.setLastName = function (last) {
    lastName = last
  }

  this.setFullName = function (firstAndLast) {
    this.setFirstName(firstAndLast.split(" ")[0])
    this.setLastName(firstAndLast.split(" ")[1])
  }

  this.setFullName(firstAndLast)
}

let bob = new Person("Bob Ross")

assert.equal(Object.keys(bob).length, 6)
assert.equal(bob instanceof Person, true)
assert.equal(bob.firstName, undefined)
assert.equal(bob.lastName, undefined)
assert.equal(bob.getFirstName(), "Bob")
assert.equal(bob.getLastName(), "Ross")
assert.equal(bob.getFullName(), "Bob Ross")
bob.setFirstName("Haskell")
assert.equal(bob.getFullName(), "Haskell Ross")
bob.setLastName("Curry")
assert.equal(bob.getFullName(), "Haskell Curry")
bob.setFullName("Haskell Curry")
assert.equal(bob.getFullName(), "Haskell Curry")
bob.setFullName("Haskell Curry")
assert.equal(bob.getFirstName(), "Haskell")
bob.setFullName("Haskell Curry")
assert.equal(bob.getLastName(), "Curry")
