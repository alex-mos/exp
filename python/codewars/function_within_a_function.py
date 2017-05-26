def always(n=0):
    return lambda: n

three = always(2)
print(three())