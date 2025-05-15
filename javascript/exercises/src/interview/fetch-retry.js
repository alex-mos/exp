export async function fetch (url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve(`data from ${url}`)
      } else {
        reject(new Error("500: server is not available"))
      }
    }, 500)
  })
}


export async function fetchRetry(url: string, trys: number = 5): Promise<string> {
  return Promise.resolve("dummy")
}
