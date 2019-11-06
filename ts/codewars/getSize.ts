export default function getSize (width: number, height: number, depth: number): number[] {
  const area: number = 2 * width * height + 2 * height * depth + 2 * width * depth
  const volume: number = width * height * depth
  return [area, volume]
}
