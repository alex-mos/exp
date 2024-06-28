import sqlite3

base = sqlite3.connect('first.db')

c = base.cursor()

while True:
    good_title = raw_input('title (skip if nothing to add): ')
    good_price = raw_input('price: ')

    if good_title and good_price:
        c.execute('INSERT INTO goods (title, price) VALUES (?, ?)', (good_title, good_price))
    else:
        print 'cancel goods adding'
        break


c.execute('SELECT * FROM goods;')

print c.fetchall()

c.execute('SELECT * FROM goods WHERE price > 1000')

print c.fetchall()

base.commit()

base.close()