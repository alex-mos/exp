program function_example;

function Cube(x: integer): integer;
begin
  Cube := x * x * x;
end;

var
  x: integer;

begin
  writeln('Enter the number: ');
  read(x);
  write('Cube of the number is: ');
  writeln(Cube(x));
end.
