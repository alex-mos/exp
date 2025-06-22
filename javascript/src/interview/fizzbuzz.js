export const fizzbuzz = (num) => {
  if (!(num % 3) && !(num % 5)) {
    return "FizzBuzz"
  } else if (!(num % 3)) {
    return "Fizz"
  } else if (!(num % 5)) {
    return "Buzz"
  } else {
    return num
  }
}
