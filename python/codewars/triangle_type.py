# Should return triangle type:
#  0 : if triangle cannot be made with given sides
#  1 : acute triangle
#  2 : right triangle
#  3 : obtuse triangle

def triangle_type(a, b, c):
    l = [a, b, c]
    large = max(l)
    l.remove(max(l))

    if 0 in l or large >= sum(l):
        return 0
    if large ** 2 < l[0] ** 2 + l[1] ** 2:
        return 1
    if large ** 2 == l[0] ** 2 + l[1] ** 2:
        return 2
    if large ** 2 > l[0] ** 2 + l[1] ** 2:
        return 3

print triangle_type(7,3,2) # Not triangle
print triangle_type(2,4,6) # Not triangle
print triangle_type(8,5,7) # Acute
print triangle_type(3,4,5) # Right
print triangle_type(7,12,8) # Obtuse


def triangle_type(a, b, c):
  x,y,z = sorted([a,b,c])
  if z >= x + y: return 0
  if z*z == x*x + y*y: return 2
  return 1 if z*z < x*x + y*y else 3