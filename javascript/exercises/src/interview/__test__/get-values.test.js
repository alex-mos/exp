import "../get-values"

describe("get-values", () => {
  test("main", () => {
    const obj = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    };

    expect(obj.getValues('key1 key2 key3')).toBe("value1 value2 value3")
    expect(obj.getValues('key1', 'key2', 'key3')).toBe("value1 value2 value3")
    expect(obj.getValues(['key1', 'key2', 'key3'])).toBe("value1 value2 value3")
  })
})
