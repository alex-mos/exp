/*
  Cделать функцию, которая принимает урл-строку и пытается пять раз сделать запрос.
  Eсли получается — отдаёт ответ.
  Если не получается за пять раз — возвращает текст что запрос не удался.
*/

export async function fetchRetry(url, trys = 5) {
  if (trys === 0) {
    return "the data is not retreived"
  }

  const response = await fetch(url)

  if (response.ok) {
    return response
  }

  return fetchRetry(url, trys - 1)
}

function fetch (url) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (Math.random() > 0.8) {
        resolve(new Response(200, {userId: 1, admin: true}))
      }
      resolve(new Response(500, {error: "server is not available"}))
    }, 0)
  })
}

class Response {
  constructor(status, body) {
    this.status = status
    this.body = body
  }

  get ok() {
    return this.status >= 200 && this.status < 300
  }

  json() {
    return Promise.resolve(this.body)
  }
}
