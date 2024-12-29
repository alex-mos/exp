program diamond;

procedure PrintSpaces(count: integer);
var
  i: integer;
begin
  for i := 1 to count do
    write(' ');
end;

procedure PrintLineOfDiamond(line, half: integer);
begin
  PrintSpaces(half + 1 - line);
  write('*');
  if line > 1 then
  begin
    PrintSpaces(2 * line - 3);
    write('*');
  end;
  writeln;
end;

var
  height: integer;
  half: integer;
  line: integer;
begin
  repeat
    writeln('Enter the height of a diamond (positive odd):');
    readln(height);
  until (height > 0) and (height mod 2 = 1);
  half := height div 2;
  for line := 1 to half + 1 do
    PrintLineOfDiamond(line, half);
  for line := half downto 1 do
    PrintLineOfDiamond(line, half);
end.
