import { mazeRunner } from "../6-maze-runner"

describe("mazeRunner", function () {
  it("first maze", function () {
    const maze = [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ]

    expect(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])).toBe("Finish")
    expect(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"])).toBe("Finish")
    expect(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"])).toBe("Finish")
    expect(mazeRunner(maze, ["N", "N", "N", "W", "W"])).toBe("Dead")
    expect(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"])).toBe("Dead")
    expect(mazeRunner(maze, ["N", "E", "E", "E", "E"])).toBe("Lost")
    expect(mazeRunner(maze, ["N", "E", "E", "E", "E", "S"])).toBe("Lost")
    expect(mazeRunner(maze, ["N", "E", "E", "E", "E", "S", "W"])).toBe("Dead")
  })

  it("second maze", function () {
    const maze = [
      [2, 0, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 3],
      [0, 0, 0, 0],
    ]

    expect(mazeRunner(maze, ["E", "S", "S", "S", "E", "E", "N"])).toBe("Finish")
    expect(mazeRunner(maze, ["E", "S", "E", "E", "S"])).toBe("Finish")
    expect(mazeRunner(maze, ["E", "S", "W"])).toBe("Dead")
    expect(mazeRunner(maze, ["E", "S", "S", "S", "S"])).toBe("Dead")
    expect(mazeRunner(maze, ["E", "S", "E", "E"])).toBe("Lost")
  })
})
