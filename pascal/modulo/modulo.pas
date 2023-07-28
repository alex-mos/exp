program modulo;

var
  x: integer = 0;
  isNegative: boolean = false;

begin
  writeln('enter the x');
  read(x);
  isNegative := x < 0;
  if
    isNegative
  then
    x := -x
  writeln('the modulo of x is ', x);
end.
