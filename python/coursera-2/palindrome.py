# -*- coding: utf-8 -*-


def is_palindrome(phrase):
    """ (str) —> bool

    Returns True if string is palindrome.

    >>> is_palindrome(u'Лезу в узел')
    True

    >>> is_palindrome('noon')
    True

    >>> is_palindrome('Fuck u')
    False
    """
    return phrase.lower() == phrase[::-1].lower()


print is_palindrome('noon')
print is_palindrome(u'Лезу в узел')