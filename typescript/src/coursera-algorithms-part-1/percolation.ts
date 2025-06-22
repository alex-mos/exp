export class Percolation {
  grid: number[] = []

  // creates n-by-n grid, with all sites initially blocked
  constructor(n: number) {
    for (let i = 0; i < n * n; i++) {
      this.grid[i] = i
    }
  }

  // opens the site (row, col) if it is not open already
  public open(row: number, col: number): void {

  }

  // is the site (row, col) open?
  // public isOpen(row: number, col: number): boolean {
  //
  // }

  // is the site (row, col) full?
  // public  isFull(row: number, col: number): boolean {
  //
  // }

  // returns the number of open sites
  // public numberOfOpenSites(): number {
  //
  // }

  // does the system percolate?
  // public  percolates(): boolean {
  //
  // }

  // test client (optional)
  public static main(args: string[]): void {

  }
}
