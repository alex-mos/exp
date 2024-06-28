// Напишите программу для подсчета пробелов, табуляций и новых строк.

#include <stdio.h>

int main() {
  int spaces = 0;
  int tabs = 0;
  int newLines = 0;
  char c;

  while ((c = getchar()) != EOF) {
    switch (c) {
      case ' ':
        spaces++;
        break;
      case '\t':
        tabs++;
        break;
      case '\n':
        newLines++;
        break;
    }
  }

  printf("пробелов: %d\n", spaces);
  printf("табуляций: %d\n", tabs);
  printf("строк: %d\n", newLines + 1);

  return 0;
}
