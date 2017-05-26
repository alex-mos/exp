def filter_list(l):
    """ (list) -> list

    Returns list of numbers without strings.

    >>> filter_list([1, 2, 'a', 'b'])
    [1, 2]
    """

    return filter(lambda i: type(i) is int, l)