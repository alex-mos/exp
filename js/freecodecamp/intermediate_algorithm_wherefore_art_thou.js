import assert from 'assert'

whatIsInAName (sourceArr, testObj) {
  
}

assert.deepEqual(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }), [{ first: "Tybalt", last: "Capulet" }])
assert.deepEqual(whatIsInAName([{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }], { "apple": 1 }), [{ "apple": 1 }, { "apple": 1 }, { "apple": 1, "bat": 2 }])
assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }])
assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 }), [{ "apple": 1, "bat": 2, "cookie": 2 }])
assert.deepEqual(whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }), [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }])
assert.deepEqual(whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3}), [])