export function paperwork(classmates: number, pages: number) {
  return classmates < 0 || pages < 0 ? 0 : classmates * pages
}
