export function diff(angle1, angle2) {
  const max = Math.max(angle1, angle2)
  const min = Math.min(angle1, angle2)
  const diff = max - min
  return diff > 180 ? 360 - diff : diff
}
