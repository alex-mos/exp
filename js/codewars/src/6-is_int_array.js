/** * My ***/

// isIntArray = (arr) => arr ? arr.every(Number.isSafeInteger) : false;

/** * Best ***/

isIntArray = (arr) => Array.isArray(arr) && arr.every(Number.isSafeInteger)


/** * Usage ***/

console.log(isIntArray([1, 2, 3, 4]))
console.log(isIntArray([1, 2, 3, NaN]))
console.log(isIntArray([]))
