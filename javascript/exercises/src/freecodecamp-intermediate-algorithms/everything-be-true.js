import assert from "assert"

/**
 * Принимает массив объектов и строку, которая является свойством этих обьектов.
 * Возвращает ответ, являются ли значения этого свойства во всех объектах массива truthy или нет.
 * @param {array} collection
 * @param {string} pre
 * @return {boolean}
 */
function truthCheck(collection, pre) {
  let result = true
  collection.forEach((item) => {
    if (!item[pre]) {
      result = false
    }
  })
  return result
}

assert.equal(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy", sex: "male" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex",
  ),
  true,
)
assert.equal(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male" },
      { user: "Dipsy" },
      { user: "Laa-Laa", sex: "female" },
      { user: "Po", sex: "female" },
    ],
    "sex",
  ),
  false,
)
assert.equal(
  truthCheck(
    [
      { user: "Tinky-Winky", sex: "male", age: 0 },
      { user: "Dipsy", sex: "male", age: 3 },
      { user: "Laa-Laa", sex: "female", age: 5 },
      { user: "Po", sex: "female", age: 4 },
    ],
    "age",
  ),
  false,
)
assert.equal(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true },
      { name: "FastFoward", onBoat: null },
    ],
    "onBoat",
  ),
  false,
)
assert.equal(
  truthCheck(
    [
      { name: "Pete", onBoat: true },
      { name: "Repeat", onBoat: true, alias: "Repete" },
      { name: "FastFoward", onBoat: true },
    ],
    "onBoat",
  ),
  true,
)
assert.equal(truthCheck([{ single: "yes" }], "single"), true)
assert.equal(
  truthCheck([{ single: "" }, { single: "double" }], "single"),
  false,
)
assert.equal(
  truthCheck([{ single: "double" }, { single: undefined }], "single"),
  false,
)
assert.equal(
  truthCheck([{ single: "double" }, { single: NaN }], "single"),
  false,
)
