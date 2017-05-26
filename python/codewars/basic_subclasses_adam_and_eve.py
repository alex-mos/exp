class Human(object):
    pass


class Man(Human):
    pass


class Woman(Human):
    pass


def god():
    return [Man(), Woman()]


paradise = god()
