# -*- coding: utf-8 -*-

# return a list of tuples sorted by frequency with
# the most frequent letter first. Any letters with the
# same frequency are ordered alphabetically

import list_filtering

def letter_frequency(text):
    """ (str) —> list of pair tuples

    Returns sorted list of pairs: char and frequency in string.

    >>> letter_frequency('aaAabb dddDD hhcc')
    [('d', 5), ('a', 4), ('b', 2), ('c', 2), ('h', 2)]

    >>> letter_frequency('wklv lv d vhfuhw phvvdjh')
    [('v', 5), ('h', 4), ('d', 2), ('l', 2), ('w', 2), ('f', 1), ('j', 1), ('k', 1), ('p', 1), ('u', 1)]

    >>> letter_frequency('Resulting array is of wrong length')
    [('r', 4), ('g', 3), ('n', 3), ('a', 2), ('e', 2), ('i', 2), ('l', 2), ('o', 2), ('s', 2), ('t', 2), ('f', 1), ('h', 1), ('u', 1), ('w', 1), ('y', 1)]

    >>> letter_frequency("As long as I'm learning something, I figure I'm OK - it's a decent day.")
    [('i', 7), ('a', 5), ('e', 5), ('n', 5), ('g', 4), ('s', 4), ('m', 3), ('o', 3), ('t', 3), ('d', 2), ('l', 2), ('r', 2), ('c', 1), ('f', 1), ('h', 1), ('k', 1), ('u', 1), ('y', 1)]
    """
    result = {}
    text = text.lower()

    for char in text:
        if char in 'abcdefghijklmnopqrstuvwxyz':
            result.update({char: text.count(char)})

    result = sorted(result.items(), key=lambda x: x[0])
    result = sorted(result, key=lambda x: x[1], reverse=True)

    print result

print list_filtering.filter_list([1, 2, 'a', 'b'])

print list_filtering.__name__

print __name__

import doctest
doctest.testmod()