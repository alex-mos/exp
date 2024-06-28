class Animal(object):
    """
    Makes cute animals.
    """
    is_alive = True

    def __init__(self, name, age):
        self.name = name
        self.age = age

    def description(self):
        print self.name
        print self.age


hippo = Animal('boo', 42)
cat = Animal('Gav', 1)

print hippo.is_alive

hippo.is_alive = False

print hippo.is_alive

print cat.is_alive