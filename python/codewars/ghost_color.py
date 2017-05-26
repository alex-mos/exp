from random import randint


class Ghost(object):
    def __init__(self):
        self.color = ['white', 'yellow', 'purple', 'red'][randint(0, 3)]