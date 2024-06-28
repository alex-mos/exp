// Напишите программу, печатающую гистограммы длин вводимых слов. Гистограмму легко рисовать горизонтальными полосами.
// Программа умеет корректно считать только ascii-символы и не умеет разделять слова по сложным кавычкам, которые занимают больше одного байта.

#include <stdio.h>
#include <stdbool.h>

int main() {
  int wordLengths[1000]; // допустим, что у нас не будет слов, длинее 1000 символов
  int currentWordLength = 0;
  char c;
  int i;
  bool isCursorInWord = false;

  for (i = 0; i < 1000; ++i) {
    wordLengths[i] = 0;
  }
  while (true) {
    c = getchar();
    if (c == ' '
    || c == ','
    || c == '.'
    || c == ':'
    || c == '\n'
    || c == ';'
    || c == '('
    || c == ')'
    || c == '['
    || c == ']'
    || c == '*'
    || c == '"'
    || c == '?'
    || c == '!'
    || c == '-'
    || c == '/'
    || c == '\''
    || c == '@'
    || c == '$'
    || c == EOF
    ) {
      if (currentWordLength != 0) {
        ++wordLengths[currentWordLength];
        currentWordLength = 0;
      }
      if (c == EOF) {
        break;
      }
    } else {
      // printf("%c", c);
      isCursorInWord = true;
      currentWordLength++;
    }
  }
  for (i = 0; i < 1000; ++i) {
    if (wordLengths[i] != 0) {
      printf("%2d: ", i);
      for (int j = 0; j < wordLengths[i]; j++) {
        printf("#");
      }
      printf("\n");
    }
  }
  return 0;
}
