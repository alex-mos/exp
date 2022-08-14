const tetrominoTypes = {
  square: [["down", "right", "up"]],
  t: [
    ["down", "down", "upRight"],
    ["right", "right", "downLeft"],
    ["down", "down", "upLeft"],
    ["downLeft", "right", "right"]
  ],
  l: [
    ["down", "down", "right"],
    ["right", "right", "up"],
    ["right", "down", "down"],
    ["down", "upRight", "right"]
  ],
  j: [
    ["down", "down", "left"],
    ["down", "right", "right"],
    ["right", "downLeft", "down"],
    ["right", "right", "down"]
  ],
  long: [
    ["right", "right", "right"],
    ["down", "down", "down"]
  ],
  z: [
    ["right", "down", "right"],
    ["down", "left", "down"]
  ],
  s: [
    ["right", "up", "right"],
    ["down", "right", "down"]
  ]
}
class Board {
  constructor(width, height) {
    this.board = []
    this.width = width
    this.height = height
    this.createBoard()
    console.log(this.board)
  }
  placeTetramino(instruction, x, y) {}
  hasCollisions() {
    for (let row of this.board) {
      for (let cellValue of row) {
        if (cellValue > 1) {
          return true
        }
      }
    }
    return false
  }
  createBoard() {
    for (let y = 0; y < this.height; y++) {
      this.board.push([])
    }
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        this.board[y][x] = 0
      }
    }
  }
}
class Tetromino {
  constructor(tetrominoType) {}
}
const tetraminos = []
const board = new Board(4, 3)
console.log(board.hasCollisions())
//# sourceMappingURL=index.js.map
