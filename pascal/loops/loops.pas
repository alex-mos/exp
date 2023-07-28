// Программа, которая выводит косую линию из символов *.
program loops;

var
  i: integer;
  j: integer = 0;
  length: integer = 24;

begin
  for i := 0 to length do
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
