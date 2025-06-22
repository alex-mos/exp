import type { Servers, TestFunc } from "../find-server"
import { findServer } from "../find-server"

describe("find-server", () => {
  test("main", async () => {
    const servers: Servers = ["srv-a", "srv-b", "srv-c", "srv-d"]

    const testFunc: TestFunc = (serverName) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(Boolean(Math.random() > 0.1))
        }, 10)
      })
    }

    expect(servers).toContain(await findServer(servers, testFunc))
  })
})
