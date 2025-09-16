// Программа, которая выводит ромб заданной высоты из символа *
// Программа принимает только положительные целые нечётные числа.
program diamond;

var
  height: integer;

begin
  write('Enter the diamond height (positive odd): ');
  read(height);

  if height < 1 then
    writeln('Number should be positive.')
  else if height mod 2 = 0 then
    writeln('Number should be odd.')
  else begin
    
  end;
end.
