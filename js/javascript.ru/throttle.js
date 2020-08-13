// import { throttle } from 'lodash'

function f(param) {
  console.log(param)
}

const f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано

function throttle(func, timeout) {
  let cooldown;
  let lastParam;

  return function(param) {
    if (cooldown) {
      lastParam = param;
      return;
    }

    cooldown = true;
    setTimeout(() => {
      cooldown = false;
      return func(lastParam)
    }, timeout);

    return func(param)
  }
}
