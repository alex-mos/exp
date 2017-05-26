# list of squares with list comprehension
print [x ** 2 for x in range(1, 6) if x ** 2 < 25]

# list of squares with simple method
l = []
for x in range(1, 6):
    x **= 2
    if x < 25:
        l.append(x)
print l

# The comprehension should consist of the cubes of the numbers 1 through 10 only if the cube is evenly divisible by four.
from math import pow

cubes_by_four = [pow(x, 3) for x in range(1, 11) if not pow(x, 3) % 4]
print cubes_by_four