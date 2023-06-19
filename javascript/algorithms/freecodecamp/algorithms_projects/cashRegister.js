const banknotes = [
  {name: 'ONE HUNDRED', nominal: 100},
  {name: 'TWENTY', nominal: 20},
  {name: 'TEN', nominal: 10},
  {name: 'FIVE', nominal: 5},
  {name: 'ONE', nominal: 1},
  {name: 'QUARTER', nominal: 0.25},
  {name: 'DIME', nominal: 0.1},
  {name: 'NICKEL', nominal: 0.05},
  {name: 'PENNY', nominal: 0.01},
]

function checkCashRegister(price, cash, cashInDrawer) {
  let changeAmount = cash - price
  const change = []

  // проставляем списку банкнот имеющуюся в кассе сумму
  const cashInDrawerWithInfo = banknotes.map(banknote => {
    return {
      ...banknote,
      // записать напротив названия и номинала каждой купюры, сколько денег в купюрах такого номинала находится в кассе
      amount: cashInDrawer.find(item => item[0] === banknote.name)[1]
    }
  })

  for (let banknote of cashInDrawerWithInfo) {
    let banknoteAmount = 0
    while (banknote.amount > 0 && changeAmount > 0 && changeAmount >= banknote.nominal) {
      banknoteAmount += banknote.nominal
      banknote.amount -= banknote.nominal
      banknote.amount = round(banknote.amount)
      changeAmount -= banknote.nominal
      changeAmount = round(changeAmount)
    }
    if (banknoteAmount > 0) {
      change.push([banknote.name, round(banknoteAmount * 100) / 100])
    }
  }

  const cashAmount = round(cashInDrawerWithInfo.reduce((acc, banknote) => acc += banknote.amount, 0) * 100) / 100

  if (changeAmount === 0 && cashAmount > 0) {
    return {
      status: 'OPEN',
      change
    }
  }

  if (changeAmount > 0) {
    return {
      status: 'INSUFFICIENT_FUNDS',
      change: []
    }
  }

  if (changeAmount === 0 && cashAmount === 0) {
    return {
      status: 'CLOSED',
      change: cashInDrawer
    }
  }
}

function round(num) {
  return Math.round(num * 100) / 100
}

assert.deepEqual(checkCashRegister(
  19.5,
  20,
  [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
  {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}
);

assert.deepEqual(checkCashRegister(
  19.5,
  20,
  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
  {status: "OPEN", change: [["QUARTER", 0.5]]}
);
assert.deepEqual(checkCashRegister(
  3.26,
  100,
  [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]),
  {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
);
assert.deepEqual(checkCashRegister(
  19.5,
  20,
  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
  {status: "INSUFFICIENT_FUNDS", change: []}
);
assert.deepEqual(checkCashRegister(
  19.5,
  20,
  [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]),
  {status: "INSUFFICIENT_FUNDS", change: []}
);
