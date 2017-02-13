[...Array(100).keys()].map(i => {
 let f = !(i % 3), b = !(i % 5);
 console.log(f ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
})
