program square100;

var
  i: integer;

begin
  i := 1;
  while i <= 100 do
    begin
      write(i * i, ' ');
      i := i + 1;
    end;
end.
