export default function magic() {
  const sum = []

  console.log(nums)

  function inner(...nums) {
  //   if (nums && nums.length) {
  //     return sum.push(inner(nums))
  //   } else {
  //     return 0
  //   }
  // }

  // return sum
}

/*

Кажется что функция magic должна хранить в себе переменную,
которая будет аккумулировать значение, которое вернут внутренние функции.

Внутренняя функция должна 

expect(magic(1, 2)(3, 4, 5)(6)(7, 10)).toBe(38)

magic(1, 2) + magic(3, 4, 5) + magic(6) + magic(7, 10) + 



*/