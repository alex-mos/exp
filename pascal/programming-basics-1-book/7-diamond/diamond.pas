// Программа, которая выводит ромб заданной высоты из символа *
// Принимает только положительные целые нечётные числа.
program diamond;

var
  size: integer;
  center: integer;
  i: integer;
  j: integer;

begin
  write('Enter the diamond size (positive odd): ');
  read(size);

  if size < 1 then
    writeln('Error: only positive numbers accepted.')
  else if size mod 2 = 0 then
    writeln('Error: only odd numbers accepted.')
  else begin
    center := size div 2 + 1;

    for i:= 1 to center do begin
      for j:= 1 to size do begin
        if (j = center - i + 1) or (j = size - center + i) then
          write('*')
        else
          write(' ');
      end;
      writeln('');
    end;

    for i:= 1 to center - 1 do begin
      for j:= 1 to size do begin
        if (j = i + 1) or (j = size - i) then
          write('*')
        else
          write(' ');
      end;
      writeln('');
    end;
  end;
end.
