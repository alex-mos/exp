// --- 1 ---
interface labeledValue {
  label: string
}

function printLabel(labeledObj: labeledValue) {
  console.log(labeledObj.label)
}

let myObj = {
  label: 'Size 10 object',
  size: 10,
}

printLabel(myObj)

// --- 2 ---
interface squareConfig {
  color?: string
  width?: number
}

function createSquare(config: squareConfig): { color: string, area: number } {
  let newSquare = {
    color: 'white',
    area: 100,
  }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color: 'black'})
console.log(mySquare)
