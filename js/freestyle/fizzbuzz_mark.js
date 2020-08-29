[...Array(100).keys()].map((i) => {
  const f = !(i % 3); const b = !(i % 5)
  console.log(f ? b ? 'FizzBuzz' : 'Fizz' : b ? 'Buzz' : i)
})
