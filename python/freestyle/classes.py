class Animal(object):
    def __init__(self, type, name):
        self.type = type
        self.name = name

    def __repr__(self):
        return self.type

a = Animal('monkey', 'ira')

print a
