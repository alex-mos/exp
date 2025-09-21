// Программа, которая выводит диагональ из символа *.
program StarSlash;

var
  i: integer;
  j: integer;
  length: integer;

begin
  write('length: ');
  read(length);

  for i := 0 to length - 1 do begin
    for j := 0 to i - 1 do
      write(' ');

    writeln('*');
  end;
end.
