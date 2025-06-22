function foo(callback) {
  setTimeout(function () {
    callback("A")
  }, Math.random() * 100)
}

function bar(callback) {
  setTimeout(function () {
    callback("B")
  }, Math.random() * 100)
}

function baz(callback) {
  setTimeout(function () {
    callback("C")
  }, Math.random() * 100)
}

export function consequtiveCallbacks(callback) {
  const result = []

  const arr = foo((value) => {
    result.push(value)
    bar((value) => {
      result.push(value)
      baz((value) => {
        result.push(value)
        callback(result)
      })
    })
  })
}
