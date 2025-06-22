// todo: доделать
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/127/strings/880/
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  x = String(x).split("").reverse().join()
  if (x[x.length - 1] === "-") {
    x = "-" + x.slice(0, x.length - 1)
  }
  return Number(x)
}
