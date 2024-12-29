#include <stdio.h>
#include <stdlib.h>

int main() {

  int n = 2000000000;
  char* a = (char*)malloc(n);

  for (int i = 0; i < n; i++) {
    a[i] = i;
  }

  printf("Array successfully created!\n");

  int w;
  scanf("%d", &w);

  return 0;
}
