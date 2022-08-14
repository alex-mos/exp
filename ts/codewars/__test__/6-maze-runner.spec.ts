import { expect } from "chai"
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
      [1, 2, 1, 0, 1, 0, 1]
    ]

    expect(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"])).to.equal("Finish")
    expect(
      mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"])
    ).to.equal("Finish")
    expect(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E", "W", "W"])).to.equal(
      "Finish"
    )
    expect(mazeRunner(maze, ["N", "N", "N", "W", "W"])).to.equal("Dead")
    expect(
      mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"])
    ).to.equal("Dead")
    expect(mazeRunner(maze, ["N", "E", "E", "E", "E"])).to.equal("Lost")
    expect(mazeRunner(maze, ["N", "E", "E", "E", "E", "S"])).to.equal("Lost")
    expect(mazeRunner(maze, ["N", "E", "E", "E", "E", "S", "W"])).to.equal("Dead")
  })

  it("second maze", function () {
    const maze = [
      [2, 0, 1, 1],
      [1, 0, 0, 0],
      [1, 0, 1, 3],
      [0, 0, 0, 0]
    ]

    expect(mazeRunner(maze, ["E", "S", "S", "S", "E", "E", "N"])).to.equal("Finish")
    expect(mazeRunner(maze, ["E", "S", "E", "E", "S"])).to.equal("Finish")
    expect(mazeRunner(maze, ["E", "S", "W"])).to.equal("Dead")
    expect(mazeRunner(maze, ["E", "S", "S", "S", "S"])).to.equal("Dead")
    expect(mazeRunner(maze, ["E", "S", "E", "E"])).to.equal("Lost")
  })
})
