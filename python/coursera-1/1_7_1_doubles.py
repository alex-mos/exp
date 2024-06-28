def shift_left(l):
    """ (list) -> NoneType

    Shift each item in the list one position to the left
    and shift the first item to the last position.

    Precondition: len(list) >= 1

    >>> shift_left([1, 2, 3, 4, 5])
    [2, 3, 4, 5, 1]
    >>> shift_left([1])
    [1]
    """

    l.append(l.pop(0))


def count_doubles(string):
    """(str) -> int

    Returns number of same neihbouring pairs of characters in the string.

    >>> count_doubles('abccdeffggh')
    3
    >>> count_doubles('aaaabb')
    4
    """

    pair_count = 0
    i = 0

    for char in range(len(string) - 1):
        if string[i] == string[i + 1]:
            pair_count += 1
        i += 1
    return pair_count
