"use strict";
exports.__esModule = true;
exports.getSum = void 0;
// Даны два числа a и b. Найти сумму всех чисел между ними, включительно.
// Если числа равны, вернуть одно из них.
// Числа могут идти не по порядку.
function getSum(a, b) {
    var _a = [a, b].sort(), min = _a[0], max = _a[1];
    var result = 0;
    for (var i = min; i <= max; i++) {
        result += i;
    }
    return result;
}
exports.getSum = getSum;
