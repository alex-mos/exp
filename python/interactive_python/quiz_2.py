import math


def logic(p, q):
    return not (p or not q)

print logic(True, True)
print logic(True, False)
print logic(False, True)
print logic(False, False)

print '*****'


def do_stuff():
    print "Hello world"
    return "Is it over yet?"
    print "Goodbye cruel world!"

print do_stuff()

print '*****'

n = 123
print (n % 100 - n % 10) / 10
print (n % 10) / 10
print ((n - n % 10) / 10) % 10

print '*****'


def f(x):
    return -5 * x ** 5 + 69 * x ** 2 - 47

print f(0)
print f(1)
print f(2)
print f(3)

print '*****'


def future_value(present_value, annual_rate, periods_per_year, years):
    rate_per_period = annual_rate / periods_per_year
    periods = periods_per_year * years

    return present_value * (1 + rate_per_period) ** periods


print "$500 at 4% compounded daily for 10 decades yields $", future_value(500, .04, 10, 10)
print "$1000 at 2% compounded daily for 3 years yields $", future_value(1000, .02, 365, 3)

print '*****'


def polygon_area(number_of_sides, side_length):
    return (number_of_sides / 4.0) * side_length ** 2 / math.tan(math.pi / number_of_sides)

print polygon_area(5, 7)
print polygon_area(7, 3)


print '*****'


def max_of_2(a, b):
    if a > b:
        return a
    else:
        return b


def max_of_3(a, b, c):
    return max_of_2(a, max_of_2(b, c))

print '*****'


def project_to_distance(point_x, point_y, distance):
    dist_to_origin = math.sqrt(point_x ** 2 + point_y ** 2)
    scale = distance / dist_to_origin
    return point_x * scale, point_y * scale

print project_to_distance(2, 7, 4)