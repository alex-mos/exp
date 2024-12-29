program function_example;

function Cube(x: real): real;
begin
  Cube := x * x * x;
end;

var
  x: real;
begin
  // writeln('Enter the number:');
  // readln(x);
  x := 3.0;
  write('Cube of the number is');
  writeln(Cube(x));
end.
