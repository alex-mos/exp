# Create a database /tmp/movies.db using SQLite3
# Create a table in it called "MOVIES"
# Insert data

import os
import sqlite3

movies = [
    ['Rise of the Planet of the Apes', 2011, 77],
    ['Dawn of the Planet of the Apes', 2014, 91],
    ['Alien', 1979, 97],
    ['Aliens', 1986, 98],
    ['Mad Max', 1979, 95],
    ['Mad Max 2: The Road Warrior', 1981, 100],
]

if not os.path.exists('tmp'):
    os.makedirs('tmp')

con = sqlite3.connect('tmp/movies.db')
c = con.cursor()

c.execute('DROP TABLE MOVIES')

c.execute('CREATE TABLE MOVIES(Name TEXT, Year INTEGER, Rating INTEGER)')

for name, year, rating in movies:
    c.execute('INSERT INTO MOVIES VALUES (?, ?, ?)', (name, year, rating))

con.commit()
con.close()