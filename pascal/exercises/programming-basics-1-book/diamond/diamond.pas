program diamond;

var
  size: integer;   // ширина и высота ромба
  center: integer; // половина ширины ромба с округлением в большую сторону
  i: integer;  // счётчик строк ромба
  j: integer;

begin
  writeln('enter the size of a diamond');
  read(size);

  // Если число чётное, возвращаем ошибку и прекращаем выполнение программы.
  if (size mod 2 = 0) or (size < 0) then
    begin
      writeln('error: only positive odd numbers accepted.');
      halt(1);
    end;

  // Находим центр нечётного числа.
  center := size div 2 + 1;
  
  // Рисуем верхнюю часть ромба до середины включительно.
  i := 0;
  repeat

    // todo: вынести этот блок в функцию writeLine
    begin
      for j := 1 to size do
        begin
          if (j = (center - i)) or (j = (center + i)) and (i > 0) then
            write('*')
          else
            write(' ')
        end;
      writeln();
      i := i + 1;
    end
    // / todo: вынести этот блок в функцию writeLine

  until i = center;

  // Рисуем нижнюю часть ромба.
  for i := center - 2 downto 0 do

    // todo: вынести этот блок в функцию writeLine
    begin
      for j := 1 to size do
        begin
          if (j = (center - i)) or (j = (center + i)) and (i > 0) then
            write('*')
          else
            write(' ')
        end;
      writeln();
    end;
    // / todo: вынести этот блок в функцию writeLine
end.
