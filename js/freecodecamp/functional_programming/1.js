// the global variable
let bookList = ["Hound", "Bodies", "Philosophiæ", "Arithmeticae"];

/* This function should add a book to the list and return the list */
function add (bookList, bookName) {
  let newBookList = bookList.slice()
  console.log(newBookList)
  console.log(bookName)
  newBookList.push(bookName)
  return newBookList
}

/* This function should remove a book from the list and return the list */
function remove (bookList, bookName) {
  console.log(bookList)
  let newBookList = bookList.slice()
  if (newBookList.indexOf(bookName) >= 0) {
    newBookList.splice(newBookList.indexOf(bookName), 1);
  }
  return newBookList
}

let newBookList = add(bookList, 'Time');
console.log(newBookList)

let newerBookList = remove(bookList, 'Bodies');
console.log(newerBookList)

let newestBookList = remove(add(bookList, 'Time'), 'Bodies');
console.log(newestBookList);