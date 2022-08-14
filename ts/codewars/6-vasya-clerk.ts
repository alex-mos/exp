type banknote = 25 | 50 | 100
type cashRegister = banknote[]
type queue = banknote[]
type answer = "YES" | "NO"

const TICKET_PRICE = 25

// проверить, получится ли продать билеты всем людям в очереди
// если не окажется сдачи, вернуть 'NO', если получится обслужить всех, вернуть 'YES'
export function tickets(queue: queue): answer {
  let cashRegister: cashRegister = []
  for (let it of queue) {
    const cashRegisterWithoutChange = removeChangeFromRegister(it, cashRegister)
    if (cashRegisterWithoutChange === false) {
      return "NO"
    } else {
      cashRegister = cashRegisterWithoutChange
    }
    cashRegister = putBanknoteInCashRegister(it, cashRegister)
  }
  return "YES"
}

// положить купюру в массив банкнот и отсортировать его по убыванию
export function putBanknoteInCashRegister(
  banknote: banknote,
  register: cashRegister
): cashRegister {
  return register.concat(banknote).sort((a, b) => b - a)
}

// взять сдачу из кассы или вернуть false, если нет сдачи
export function removeChangeFromRegister(
  banknote: banknote,
  register: cashRegister
): cashRegister | false {
  const result: cashRegister = []
  let change = banknote - TICKET_PRICE
  register.forEach((it: banknote) => {
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
