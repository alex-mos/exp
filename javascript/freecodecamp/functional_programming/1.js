// the global variable
const bookList = ['Hound', 'Bodies', 'Philosophiæ', 'Arithmeticae']

/* This function should add a book to the list and return the list */
function add(bookList, bookName) {
  const newBookList = bookList.slice()
  console.log(newBookList)
  console.log(bookName)
  newBookList.push(bookName)
  return newBookList
}

/* This function should remove a book from the list and return the list */
function remove(bookList, bookName) {
  console.log(bookList)
  const newBookList = bookList.slice()
  if (newBookList.indexOf(bookName) >= 0) {
    newBookList.splice(newBookList.indexOf(bookName), 1)
  }
  return newBookList
}

const newBookList = add(bookList, 'Time')
console.log(newBookList)

const newerBookList = remove(bookList, 'Bodies')
console.log(newerBookList)

const newestBookList = remove(add(bookList, 'Time'), 'Bodies')
console.log(newestBookList)
