// todo

class DisjointSet {
  elements: number[] = []
  size: number[] = []

  constructor(elements: number[]) {
    this.elements = elements
    for (let i = 0; i < elements.length; i++) {
      this.size[i] = 1
    }
  }

  private findRoot(i: number): number {
    while (i != this.elements[i]) {
      this.elements[i] = this.elements[this.elements[i]]
      i = this.elements[i]
    }
    return i
  }

  public union(p: number, q: number): void {
    const i: number = this.findRoot(q)
    const j: number = this.findRoot(p)

    if (i === j) return

    if (this.size[i] < this.size[j]) {
      this.elements[i] = j
      this.size[j] += this.size[i]
    } else {
      this.elements[j] = i
      this.size[i] += this.size[j]
    }
  }

  public isConnected(p: number, q: number): boolean {
    return this.findRoot(p) === this.findRoot(q)
  }
}


export function longestConsecutive(nums: number[]): number {
  // const set = new DisjointSet(nums)
  return 0
}
