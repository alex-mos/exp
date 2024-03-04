import "./hash"

describe("hash", () => {

  const obj = {
    person: {
      name: 'joe',
      history: {
        hometown: 'bratislava',
        bio: {
          funFact: 'I like fishing.',
        },
      },
    },
  }

  it("car", () => {
    expect(obj.hash('car')).toBe(undefined)
  })
  it("person.history.bio", () => {
    expect(obj.hash('person.history.bio')).toEqual({ funFact: 'I like fishing.' })
  })
  it("person.history.homeStreet", () => {
    expect(obj.hash('person.history.homeStreet')).toBe(undefined)
  })
  it("person.animal.pet.needNoseAntEater", () => {
    expect(obj.hash('person.animal.pet.needNoseAntEater')).toBe(undefined)
  })
})
