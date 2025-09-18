program Diamond;

procedure PrintSpaces(count: integer);
var
  i: integer;
begin
  for i := 1 to count do
    write(' ');
end;

procedure PrintLine(lineNumber, center: integer);
begin
  PrintSpaces(center + 1 - lineNumber);
  write('*');

  if lineNumber > 1 then begin
    PrintSpaces(2 * lineNumber - 3);
    write('*');
  end;
  writeln('');
end;

var
  height, center, lineNumber: integer;
begin
  repeat
    write('enter the diamond''s height (positive odd): ');
    read(height);
  until (height > 0) and (height mod 2 = 1);

  center := height div 2;

  for lineNumber := 1 to center + 1 do
    PrintLine(lineNumber, center);

  for lineNumber := center downto 1 do
    PrintLine(lineNumber, center);
end.
