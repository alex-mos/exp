import { INode, getNodesNames } from "../recursive-type"

describe("recursive type", () => {
  test("main", () => {

    const nodes: INode[] = [
      {
        id: 1,
        name: "node1",
        children: [
          { id: 11, name: "node11", children: [] },
          {
            id: 12,
            name: "node12",
            children: [
              { id: 121, name: "node121", children: [] },
              { id: 122, name: "node122", children: [] },
            ],
          },
        ],
      },
      { id: 2, name: "node2", children: [] },
      {
        id: 3,
        name: "node3",
        children: [
          { id: 31, name: "node31", children: [] },
          { id: 32, name: "node32", children: [] },
        ],
      },
      { id: 4, name: "node4", children: [] },
    ]

    const expected: string[] = [
      "node1",
      "node11",
      "node12",
      "node121",
      "node122",
      "node2",
      "node3",
      "node31",
      "node32",
      "node4"
    ]

    expect(getNodesNames(nodes)).toEqual(expected)
  })
})
