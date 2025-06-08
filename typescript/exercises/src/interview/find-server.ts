type Server = string
export type Servers = Server[]
export type TestFunc = (server: string) => Promise<boolean>

export async function findServer(servers: Servers, testFunc: TestFunc): Promise<string> {
  let i = 0

  while (true) {
    const serverNumber = i % servers.length

    if (!(await testFunc(servers[serverNumber]))) {
      return servers[serverNumber]
    }

    i++

    if (i > 1000000) i = 0 // prevent number overflow
  }
}
