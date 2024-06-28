/* My */
export const isIntArray = (arr) =>
  arr ? arr.every(Number.isSafeInteger) : false

/* Best */
/*
isIntArray = (arr) => Array.isArray(arr) && arr.every(Number.isSafeInteger)
*/
