import "../hash"

describe("hash", () => {
  const obj = {
    person: {
      name: "joe",
      history: {
        hometown: "bratislava",
        bio: {
          funFact: "I like fishing.",
        },
      },
    },
  }

  test("car", () => {
    expect(obj.hash("car")).toBe(undefined)
  })

  test("person.history.bio", () => {
    expect(obj.hash("person.history.bio")).toEqual({
      funFact: "I like fishing.",
    })
  })

  test("person.history.homeStreet", () => {
    expect(obj.hash("person.history.homeStreet")).toBe(undefined)
  })

  test("person.animal.pet.needNoseAntEater", () => {
    expect(obj.hash("person.animal.pet.needNoseAntEater")).toBe(undefined)
  })
})
