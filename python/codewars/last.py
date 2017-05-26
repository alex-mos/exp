def last(*args):
    last_of_tuple = list(args)[-1]
    return last_of_tuple if type(last_of_tuple) in (int, float) else last_of_tuple[-1]

print last(1)
print last(1, 2)
print last([1, 4, 7])
print last(1.5, 4.2, 7.21)