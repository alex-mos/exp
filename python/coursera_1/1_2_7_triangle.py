import math


def area(base, height):
    '''(number, number) -> number

    Return the area of a triangle with dimensions base and height.
    '''
    return base * height / 2


def perimeter(side1, side2, side3):
    '''(number, number, number) -> number

    Return the perimter of a triangle with three sides.

    >>> perimeter(4, 5, 6)
    15
    >>> perimeter(1, 6, 1)
    8
    '''
    return side1 + side2 + side3


def semiperimeter(side1, side2, side3):
    '''(number, number, number) -> number

    Return the semiperimeter of a triangle with three sides.

    >>> semiperimeter(6, 8, 9)
    11.5
    >>> semiperimeter(14, 18, 3)
    17.5
    '''
    return perimeter(side1, side2, side3) / 2


def area_hero(side1, side2, side3):
    """ (number, number, number) —> float

    Return the area of a triangle with sides of length
    side1, side2, side3.

    >>> area_hero(3, 4, 3)
    6.0
    >>> area_hero(10.5, 6, 9.3)
    27.731
    """

    semi = semiperimeter(side1, side2, side3)
    area = math.sqrt(semi * (semi - side1) * (semi - side2) * (semi - side3))
    return area