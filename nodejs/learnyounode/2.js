let args = process.argv.slice(2)
let argsSum = args.map(x => Number(x)).reduce((x, y) => x + y)
console.log(argsSum)
