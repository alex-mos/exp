def fizzbuzz(n):
    """ (int) -> list

    Return an array containing the numbers from 1 to N, where N is the parametered value. N will never be less than 1.
    Replace certain values however if any of the following conditions are met:
    If the value is a multiple of 3: use the value 'Fizz' instead
    If the value is a multiple of 5: use the value 'Buzz' instead
    If the value is a multiple of 3 & 5: use the value 'FizzBuzz' instead
        
    >>> fizzbuzz(10)
    [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']
    >>> fizzbuzz(20)
    [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz', 16, 17, 'Fizz', 19, 'Buzz']
    """

    result = []

    for i in range(1, n + 1):

        if i % 3 == 0 and i % 5 == 0:
            item = 'FizzBuzz'
        elif i % 3 == 0:
            item = 'Fizz'
        elif i % 5 == 0:
            item = 'Buzz'
        else:
            item = i

        result.append(item)

    return result


""" best practice:

def fizzbuzz(n):
    return ['Fizz' * (not i % 3) + 'Buzz' * (not i % 5) or i for i in range(1, n + 1)]

"""

if __name__ == '__main__':
    import doctest
    doctest.testmod()