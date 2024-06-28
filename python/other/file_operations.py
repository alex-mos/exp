import os

with open('data', 'w') as f:
    f.write('lalala')

print f.closed

print os.path.dirname(__file__)

print __file__

print __name__