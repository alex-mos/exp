import { QuickUnionUF } from "../quick-union-union-find"
import fs from "node:fs"
import path from "node:path"

type PreparedTestData = {
  numberOfElements: number
  listOfUnions: [number, number][]
}

describe("quick union union find tiny data", () => {
  const dataPath: string = path.join(__dirname, "tiny-union-find-data.txt")
  let data: string | null = null
  let preparedTestData: PreparedTestData | null = null

  try {
    data = fs.readFileSync(dataPath, "utf8")
    preparedTestData = prepareTestData(data)
    validateTestData(preparedTestData)
  } catch (error) {
    console.error(error)
    return
  }

  test("connect and check union", () => {
    const uf: QuickUnionUF = new QuickUnionUF(preparedTestData.numberOfElements)

    preparedTestData.listOfUnions.forEach(pair => {
      const p: number = pair[0]
      const q: number = pair[1]

      if (!uf.connected(p, q)) {
        uf.union(p, q)
      }
    })

    expect(uf.connected(6, 3)).toBe(false)
    expect(uf.connected(9, 3)).toBe(true)
  })
})

function prepareTestData(data: string): PreparedTestData {
  const dataArray: string[] = data.split("\n").filter(item => item)
  const numberOfElements: number = Number(dataArray[0])
  if (dataArray.length < 2) {
    return { numberOfElements, listOfUnions: [] }
  }
  const listOfUnions: [number, number][] = dataArray.slice(1).map(pair => {
    const splitPair = pair.split(" ")
    return [Number(splitPair[0]), Number(splitPair[1])]
  })
  return { numberOfElements, listOfUnions }
}

function validateTestData(data: PreparedTestData): void {
  if (!data) {
    throw { message: "No test data" }
  }
  if (!data.numberOfElements) {
    throw { message: "No numberOfElements" }
  }
  if (!data.listOfUnions?.length) {
    throw { message: "No listOfUnions" }
  }
}
