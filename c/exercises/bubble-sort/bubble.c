#include <stdio.h>
#include <string.h>

int* sort(int* arr, int length) {
  int result[10] = {0};

  memcpy(result, arr, length * sizeof(int));

  // printf("0: %d\n", result[0]);
  // printf("1: %d\n", result[1]);
  // printf("2: %d\n", result[2]);
  // printf("3: %d\n", result[3]);

  return 0;
}


int main() {
  int arr[10] = {15, 11, 156, 15, 3, 9, 500, 100, 85, 17}; 

  int* sorted = sort(arr, 10);

  return 0;
}
