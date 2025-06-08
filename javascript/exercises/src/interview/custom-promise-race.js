export function customPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    for (let promise of promises) {
      promise.then((value) => resolve(value)).catch((error) => reject(error))
    }
  })
}
