def median(l):
    if not l:
        print 'fuck you, array is empty'
    if len(l) == 1:
        return l[0]

    l2 = list(l)
    l2.sort()
    if not len(l2) % 2:
        l2[len(l2) / 2 - 1] += l2[len(l2) / 2]
        l2[len(l2) / 2 - 1] /= 2.
        del l2[len(l2) / 2]

    return l2[len(l2) / 2]


print median([4, 5, 5, 4])