program AbsoluteValue;

var
  x: integer;

begin
  read(x);
  if x < 0 then
    writeln(-x)
  else
    writeln(x);
end.
