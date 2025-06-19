function getAuth() {
  // Возвращаем Promise, который резолвит токен (здесь упрощенный пример)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy-token")
    }, 10)
  })
}

function getUser(token) {
  // Возвращаем Promise с userId (здесь упрощенный пример)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy-user-id")
    }, 10)
  })
}

function getOrder(token, userId) {
  // Возвращаем Promise с заказом (здесь упрощенный пример)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy-order")
    }, 10)
  })
}

function getPromo(token) {
  // Возвращаем Promise с данными о промо (здесь упрощенный пример)
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("dummy-promo")
    }, 10)
  })
}

export async function getData() {
  try {
    const token = await getAuth()
    const [userId, promo] = await Promise.all([getUser(token), getPromo(token)])
    const order = await getOrder(token, userId)
    return order
  } catch (error) {
    throw new Error(error)
  }
}
