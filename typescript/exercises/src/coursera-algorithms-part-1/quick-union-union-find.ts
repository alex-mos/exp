export class QuickUnionUF {
  elements: number[] = []
  size: number[] = []

  constructor(length: number) {
    for (let i = 0; i < length; i++) {
      this.elements[i] = i
      this.size[i] = 1
    }
  }

  private root(i: number): number {
    while (i != this.elements[i]) {
      this.elements[i] = this.elements[this.elements[i]]
      i = this.elements[i]
    }
    return i
  }

  public union(p: number, q: number): void {
    const i: number = this.root(q)
    const j: number = this.root(p)
    if (i == j) return

    if (this.size[i] < this.size[j]) {
      this.elements[i] = j
      this.size[j] += this.size[i]
    } else {
      this.elements[j] = i
      this.size[i] += this.size[j]
    }
  }

  public connected(p: number, q: number): boolean {
    return this.root(p) == this.root(q)
  }
}
