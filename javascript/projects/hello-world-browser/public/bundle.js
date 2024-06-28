(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // src/index.js
  var require_src = __commonJS({
    "src/index.js"(exports, module) {
      var greeting = "Hello world";
      document.write(greeting);
      module.exports = {
        greeting
      };
    }
  });
  require_src();
})();
