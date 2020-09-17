const assert = require('assert')

const TICKET_PRICE = 25

// проверить, получится ли продать билеты всем людям в очереди
// если не окажется сдачи, вернуть 'NO', если получится обслужить всех, вернуть 'YES'
function tickets(queue) {
  let cashRegister = []
  for (const it of queue) {
    const cashRegisterWithoutChange = removeChangeFromRegister(it, cashRegister)
    if (cashRegisterWithoutChange === false) {
      return 'NO'
    } else {
      cashRegister = cashRegisterWithoutChange
    }
    cashRegister = putBanknoteInCashRegister(it, cashRegister)
  }
  return 'YES'
}

// положить купюру в массив банкнот и отсортировать его по убыванию
function putBanknoteInCashRegister(banknote, register) {
  return register.concat(banknote).sort((a, b) => b - a)
}

// взять сдачу из кассы или вернуть false, если нет сдачи
function removeChangeFromRegister(banknote, register) {
  const result = []
  let change = banknote - TICKET_PRICE
  register.forEach((it) => {
    if (change !== 0 && change - it >= 0) {
      change -= it
    } else {
      result.push(it)
    }
  })
  if (change !== 0) {
    return false
  }
  return result
}

assert.equal(tickets([25, 25, 50]), 'YES')
assert.equal(tickets([25, 25, 50, 50]), 'YES')
assert.equal(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100]), 'YES')
assert.equal(tickets([25, 50, 25, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100, 25, 25, 50, 100]), 'YES')
assert.equal(tickets([25, 50, 25, 100, 25, 25, 25, 100, 25, 25, 25, 100, 25, 50, 25, 100]), 'YES')
assert.equal(tickets([25, 100]), 'NO')
assert.equal(tickets([25, 25, 50, 50, 100]), 'NO')
