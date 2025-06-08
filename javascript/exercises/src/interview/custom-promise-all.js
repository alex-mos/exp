Promise.customAll = (promises) => {
  return new Promise((resolve, reject) => {
    const result = []
    let fulfilled = 0

    if (promises.length === 0) {
      return resolve([])
    }

    for (let i = 0; i < promises.length; i++)
      promises[i]
        .then((value) => {
          result[i] = value
          fulfilled++

          if (fulfilled === promises.length) {
            resolve(result)
          }
        })
        .catch((error) => {
          reject(error)
        })
  })
}
