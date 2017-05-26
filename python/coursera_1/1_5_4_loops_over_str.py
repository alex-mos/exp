def count_vowels(string):
    """ (str) —> int

    Returns the number of vowels in string.

    >>> count_vowels('Alexander')
    4
    >>> count_vowels('Alice')
    4
    """

    vowels_count = 0

    for char in string:
        if char in 'aeiouAEIOU':
            vowels_count += 1

    return vowels_count


def collect_consonants(string):
    """ (str) —> str

    Returns substring with consonants only.

    >>> collect_consonants('Serial experiments Lain')
    Srl xprmnts Ln
    >>> collect_consonants('Alice in Wonderworld')
    Lc n Wndrwld
    """
    consonants_string = ''

    for char in string:
        if char not in 'aeiouAEIOU':
            consonants_string += char

    return consonants_string


n = collect_consonants('Some words for breakfast')