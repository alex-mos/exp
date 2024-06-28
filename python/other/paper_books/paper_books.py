import sqlite3
import sys


def add_to_base():
    with sqlite3.connect('books.db') as base:
        c = base.cursor()

        # c.execute('CREATE TABLE books (id INTEGER PRIMARY KEY AUTOINCREMENT, author STR, title STR);')

        while True:
            author = raw_input('Author: ').decode('UTF-8')
            title = raw_input('Title: ').decode('UTF-8')

            if author and title:
                pass
                c.execute('INSERT INTO books(author, title) VALUES(?, ?)', (author, title))
                base.commit()
            else:
                print('see ya.')
                break


def out_to_file():
    with sqlite3.connect('books.db') as base:
        with open('book_list.txt', 'w') as f:
            c = base.cursor()

            c.execute('SELECT author, title FROM books;')

            book = c.fetchone()

            while book:
                book = ' : '.join(book)
                book = book.encode('UTF-8') + '\n'
                f.write(book)
                book = c.fetchone()


def show():
        with sqlite3.connect('books.db') as base:
            c = base.cursor()

            c.execute('SELECT author, title FROM books;')

            book = c.fetchone()

            while book:
                book = ' : '.join(book)
                book = book.encode('UTF-8')
                print (book)
                book = c.fetchone()


def help():
    print('\n'
          '    add - add books to database\n'
          '    show - show books\n'
          '    tofile - print database to file\n'
          '    help - this help\n')
    exit()


if len(sys.argv) < 2:
    help()

if sys.argv[1] == 'add':
    add_to_base()
if sys.argv[1] == 'show':
    show()
if sys.argv[1] == 'tofile':
    out_to_file()
else:
    help()