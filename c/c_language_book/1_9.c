// Напишите программу, копирующую символы ввода в выходной поток и заменяющую стоящие подряд пробелы на один пробел.

#include <stdio.h>

int main() {
  char previousChar;
  char currentChar;

  if ((previousChar = getchar()) == EOF) {
    printf("\n");
    return 0;
  }
  printf("%c", previousChar);
  while ((currentChar = getchar()) != EOF) {
    if (previousChar != ' ' || currentChar != ' ') {
      printf("%c", currentChar);
    }
    previousChar = currentChar;
  }
  printf("\n");
  return 0;
}
