def truthy():
    print("True")


def falsey():
    print("False")


def _if(bool, func1, func2):
    return func1() if bool else func2()

_if(True, truthy, falsey)