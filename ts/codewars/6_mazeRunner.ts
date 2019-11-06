export default function mazeRunner(maze: number[][], directions: string[]): string {
  return new Maze(maze).run(directions)
}

class Maze {
  readonly WAY_ID = 0
  readonly WALL_ID = 1
  readonly START_POINT_ID = 2
  readonly FINISH_POINT_ID = 3
  readonly maze: number[][]
  private currentPosition: {x: number, y: number} = {x: 0, y: 0}

  constructor(maze: number[][]) {
    this.maze = maze
    this.setCurrentPosition(this.maze)
  }

  private setCurrentPosition (maze: number[][]): void {
    for (let row: number = 0; row < maze.length; row++) {
      for (let column: number = 0; column < maze[row].length; column++) {
        if (maze[row][column] === this.START_POINT_ID) {
          this.currentPosition = {x: column, y: row}
        }
      }
    }
  }

  public run (directions: string[]): string {
    for (let i: number = 0; i < directions.length; i++) {
      let result: string = this.step(directions[i])
      if (result !== 'way') {
        return result
      }
    }
    return 'Lost'
  }

  private step (direction: string): string {
    let nextStepPosition: {x: number, y: number} = {...this.currentPosition}
    switch (direction) {
      case 'N':
        nextStepPosition.y -= 1
        break
      case 'E':
        nextStepPosition.x += 1
        break
      case 'S':
        nextStepPosition.y += 1
        break
      case 'W':
        nextStepPosition.x -= 1
    }
    if (this.maze[nextStepPosition.y] === undefined) {
      return 'Dead'
    }
    switch (this.maze[nextStepPosition.y][nextStepPosition.x]) {
      case this.WAY_ID:
      case this.START_POINT_ID:
        this.currentPosition = {...nextStepPosition}
        return 'way'
      case this.FINISH_POINT_ID:
        return 'Finish'
      case this.WALL_ID:
      default:
        return 'Dead'
    }
  }
}
