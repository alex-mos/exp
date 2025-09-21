program PrintChars;

procedure PrintChars(ch: char; count: integer);
begin
  if count > 0 then begin
    writeln(ch);
    PrintChars(ch, count - 1);
  end;
end;

begin
  PrintChars('o', 3);
end.
