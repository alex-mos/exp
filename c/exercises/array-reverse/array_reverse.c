#include <stdio.h>
#include <stdlib.h>

void print_array(int* arr, int n);

int main(int argc, char* argv[]) {
  int max_length = 1000;
  int length = 5;
  int* arr_one = malloc(max_length * sizeof(int));
  arr_one[0] = 5;
  arr_one[1] = 11;
  arr_one[2] = 17;
  arr_one[3] = 13;
  arr_one[4] = 3;

  int* arr_two = malloc(max_length * sizeof(int));

  for (int i = 0; i < length; i++) {
    arr_two[i] = arr_one[length - 1 - i];
  }

  // print_array(arr_one, length);
  print_array(arr_two, length);
  free(arr_two);

  return 0;
}

void print_array(int* arr, int length){
  for (int i = 0; i < length; i++) {
    printf("%d ", arr[i]);
  }
  printf("\n");
}
