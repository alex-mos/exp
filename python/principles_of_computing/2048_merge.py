"""
Merge function for 2048 game.
"""


def merge(line):
    """ (list) -> list

    Function that merges a single row or column in 2048.

    >>> merge([2, 0, 2, 2])
    [4, 2, 0, 0]

    >>> merge([2, 0, 2, 4])
    [4, 4, 0, 0]

    >>> merge([0, 0, 2, 2])
    [4, 0, 0, 0]

    >>> merge([2, 2, 0, 0])
    [4, 0, 0, 0]

    >>> merge([2, 2, 2, 2])
    [4, 4, 0, 0]

    >>> merge([8, 16, 16, 8])
    [8, 32, 8, 0]
    """

    new_line = list(line)

    # Iterate over the input and create an output list that has all of the non-zero tiles slid over
    # to the beginning of the list with the appropriate number of zeroes at the end of the.

    new_line = filter(lambda i: i != 0, new_line)

    # Iterate over the list created in the previous step and create another new list in which pairs of tiles
    # in the first list are replaced with a tile of twice the value and a zero tile.

    result_line = []
    pass_next = False

    for index in range(len(new_line)):
        if pass_next:
            pass_next = False

        elif index == len(new_line) - 1:
            result_line.append(new_line[index])

        elif new_line[index] == new_line[index + 1]:
            result_line.append(new_line[index] * 2)
            pass_next = True

        else:
            result_line.append(new_line[index])

    result_line.extend([0 for _ in range(len(line) - len(result_line))])

    return result_line


if __name__ == "__main__":
    import doctest
    doctest.testmod()