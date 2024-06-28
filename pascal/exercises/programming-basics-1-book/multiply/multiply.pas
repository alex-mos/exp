program square;

var
  x: integer = 0;
  y: integer = 0;
  result: integer = 0;

begin
  write('x: ');
  read(x);
  write('y: ');
  read(y);
  result := x * y;
  writeln('x * y = ', result);
end.
