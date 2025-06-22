// Добавьте в Function.prototype функцию wrap(), которая работает согласно примеру:

Function.prototype.wrap = function (func, ...args) {
  return (...args) => func(this, ...args)
}
