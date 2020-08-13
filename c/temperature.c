#include <stdio.h>
/* Печать таблицы температур по Фаренгейту и по Цельсию для fahr = 0, 20, ..., 300 */
#define LOWER 0 /* нижняя граница температур */
#define UPPER 300 /* верхняя граница */
#define STEP 20 /* шаг */

int main()
{
	float fahr, celsius;
	fahr = LOWER;
	while (fahr <= UPPER) {
		celsius = 5 * (fahr - 32) / 9;
		printf("%3.0f\t%6.1f\n", fahr, celsius);
		fahr += STEP;
	}
	return 0;
}
