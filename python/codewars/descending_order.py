def Descending_Order(num):
    l = list(str(num))
    l.sort()
    l.reverse()
    return int(''.join(l))

print Descending_Order(12312343)