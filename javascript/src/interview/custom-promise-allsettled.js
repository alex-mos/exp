export function customPromiseAllSettled(promises) {
  return new Promise((resolve) => {
    const result = []
    let completed = 0

    for (let i = 0; i < promises.length; i++) {
      promises[i]
        .then((value) => {
          result[i] = value
        })
        .catch((error) => {
          result[i] = error
        })
        .finally(() => {
          completed++
          if (completed === promises.length) {
            resolve(result)
          }
        })
    }
  })
}
