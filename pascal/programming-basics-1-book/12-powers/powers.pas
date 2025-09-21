program Powers;

procedure Powers(x: real; var quad, cube, fourth, fifth: real);
begin
    quad := x * x;
    cube := x * x * x;
    fourth := x * x * x * x;
    fifth := x * x * x * x * x;
end;

var
  x: integer;
  quad,
  cube,
  fourth,
  fifth: real;
begin
  x := 3;
  Powers(x, quad, cube, fourth, fifth);
  writeln('x = ', x);
  writeln(quad:5:0);
  writeln(cube:5:0);
  writeln(fourth:5:0);
  writeln(fifth:5:0);
end.
