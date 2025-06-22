export default function magic(...rest) {
  const sum = rest.reduce((acc, num) => acc + num, 0)
  const inner = (...rest) => magic(sum, ...rest)
  inner.valueOf = () => sum
  return inner
}
