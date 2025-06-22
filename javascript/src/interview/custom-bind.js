// ES5
// Function.prototype.customBind = function(context) {
//   const outerThis = this
//   return function() {
//     const args = Array.from(arguments)
//     return outerThis.apply(context, args)
//   }
// }

// ES6
Function.prototype.customBind = function(context) {
  return (...args) => this.apply(context, args)
}
