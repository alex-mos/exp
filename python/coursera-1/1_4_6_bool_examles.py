def is_even(number):
    """ (number) —> bool

    Return True if number is even or False is number is odd.

    >>> is_even(4)
    True
    >>> is_even(77)
    False
    """
    return not (bool(number % 2))