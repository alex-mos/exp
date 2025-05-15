declare global {
  interface Array<T> {
    customMap<T, K>(this: T[], func): K[]
  }
}

Array.prototype.customMap = function customMap<T, K>(this: T[], func: <T>(item: T) => K): K[] {
  const result: K[] = []
  for (let i = 0; i < this.length; i++) {
    result.push(func(this[i]))
  }
  return result
}

export {} // https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
