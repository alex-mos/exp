const tetrominoTypes = {
  square: [
    ['down', 'right', 'up'],
  ],
  t: [
    ['down', 'down', 'upRight'],
    ['right', 'right', 'downLeft'],
    ['down', 'down', 'upLeft'],
    ['downLeft', 'right', 'right']
  ],
  l: [
    ['down', 'down', 'right'],
    ['right', 'right', 'up'],
    ['right', 'down', 'down'],
    ['down', 'upRight', 'right']
  ],
  j: [
    ['down', 'down', 'left'],
    ['down', 'right', 'right'],
    ['right', 'downLeft', 'down'],
    ['right', 'right', 'down']
  ],
  long: [
    ['right', 'right', 'right'],
    ['down', 'down', 'down']
  ],
  z: [
    ['right', 'down', 'right'],
    ['down', 'left', 'down']
  ],
  s: [
    ['right', 'up', 'right'],
    ['down', 'right', 'down']
  ],
}

class Board {
  width: number
  height: number
  board: number[][] = []

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
    this.createBoard()
    console.log(this.board)
  }

  placeTetramino(instruction, x, y): boolean {
    
  }

  hasCollisions(): boolean {
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
  constructor(tetrominoType: string) {
    
  }
}



const tetraminos = []


// let tetraminoShiftCounter = 0

// while (tetraminoShiftCounter < tetramino.length - 1) {
// 	while (j < board.height)
// 		while (i < board.width)
// 			for (let rotation in tetramino) {
// 				if (не умещается или фигуры накладываются) {
// 					break
// 				}
// 			}
// 		j++
// 	}
// 	tetraminos.push(tetraminos.shift())
// 	tetraminoShiftCounter++
// }

const board = new Board(4, 3)
console.log(board.hasCollisions())
// board.createBoard()

/*
111 22 3
  1 22 333
варианты:
11122
  122

 1223
 122333
11

 12233
 1223
11  3

 122333
 122  3
11

 1223
 1223
11 33

11223
1 223
1  33 

11
122
122

решение
1133
1223
1223

*/