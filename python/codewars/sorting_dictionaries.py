def sort_dict(d):
    """ (dict) -> list of tuples

    Takes dictionary with values of numbers and returns list of pairs, sorted by value.

    >>> sort_dict({3:1,2:2,1:3})
    [(1, 3), (2, 2), (3, 1)]
    >>> sort_dict({1:2,2:4,3:6})
    [(3, 6), (2, 4), (1, 2)]
    """

    return sorted(d.items(), key=lambda pair: pair[1])[::-1]


#   return sorted(d.items(), key=lambda x: x[1], reverse=True)