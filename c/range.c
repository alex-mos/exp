#include <stdio.h>

main() {
    float ml, km;
    float low, high, step;

    low = 0;
    high = 300;
    step = 20;

    km = low;

    while (km <= high) {
        printf("%3.2f : %6.2f\n", km, km * .621);
        km = km + step;
    }
}
