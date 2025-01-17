import { formattedTime } from "../formatted-time.js"

describe("formatted-time", () => {
  test("main", () => {
    expect(formattedTime(5)).toBe("00:05")
    expect(formattedTime(60)).toBe("01:00")
    expect(formattedTime(175)).toBe("02:55")
    expect(formattedTime(600)).toBe("10:00")
    expect(formattedTime(1440)).toBe("00:00")
    expect(formattedTime(1504)).toBe("01:04")
  })
})
