import { fetchRetry } from "../fetch-retry"

describe("fetch-retry", () => {
  test("main", async () => {
    const response = await fetchRetry("https://example.com")

    if (response?.ok) {
      const data = await response.json()
      expect(data).toEqual({userId: 1, admin: true})
    } else {
      expect(response).toBe("the data is not retreived")
    }
  })
})
