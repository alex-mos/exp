def sum_array(list):
    """ (list of numbers) –> number

    Returns sum of numbers in array.

    >>> sum_array([1, 2, 3])
    6
    >>> sum_array([5, 2.4, 5])
    12.4
    """

    result = 0

    for item in list:
        result += item

    return result
