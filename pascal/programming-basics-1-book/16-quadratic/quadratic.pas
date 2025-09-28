program Quadratic;

procedure quadratic(
  a, b, c: real;
  var ok: boolean;
  var x1, x2: real
);
var
  d: real;
begin
  if a = 0 then
    ok := false
  else begin
    d := b*b - 4*a*c;
    if d < 0 then
      ok := false
    else begin
      d := sqrt(d);
      x1 := (-b - d) / (2*a);
      x2 := (-b + d) / (2*a);
      ok := true
    end;
  end;
end;

var
  ok: boolean;
  x1, x2: real; 
begin
  quadratic(2, 3, 1, ok, x1, x2);
  if ok = false then
    writeln('There is no solution')
  else begin
    writeln('x1 = ', x1:5:2);
    writeln('x2 = ', x2:5:2);
  end;
end.
