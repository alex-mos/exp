// augmentation

Array.prototype.odd = function() {
  // Функция, возвращающая новый массив, содержащий только элементы с нечётными индексами.
  const odd = function(value, index) {
    if ((index + 1) % 2) {
      return value
    }
  }

  return this.filter(odd)
}

// usage

var a = [1, 2, 3, 4, 'odd', 'even']

var aOdd = a.odd()

console.log(aOdd)
