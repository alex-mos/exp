// Программа, которая выводит косую линию из символов *.
program loops;

var
  i: integer;
  j: integer = 0;
  length: integer;

begin
  writeln('Enter the length of the diagonal');
  read(length);

  for i := 0 to length - 1 do
    begin
      while j < i do
        begin
          write(' ');
          j := j + 1;
        end;
      writeln('*');
      j := 0;
    end;
end.
