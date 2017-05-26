def is_prime(n):
    if n in [0, 1]:
        return False

    for i in xrange(2, n):
        if n % i == 0:
            return False
    return True


print is_prime(4)