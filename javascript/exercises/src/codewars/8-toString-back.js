const _originalToString = (func) => Function.prototype.toString.call(func)

/** * Usage ***/

var foo = () => {}

var original = foo.toString()

foo.toString = function () {
  return "blablabla"
}

console.log(_originalToString(foo))

console.log(original)
