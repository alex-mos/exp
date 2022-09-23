class Character {
  constructor(initialHP=100) {
    this.hp = initialHP
  }

  alive = true

  updateHP (amount) {
    const calc = this.hp + amount
    if (calc <= 0) {
      this.hp = 0
      this.alive = false
    } else {
      this.hp = calc
    }
  }
}

class Enemy extends Character {
  constructor(hp, lootToDrop) {
    super(hp)
    this.lootToDrop = lootToDrop
  }
}

class Hero extends Character {
  constructor(hp) {
    super(hp)
  }

  inventory = []

  defeatEnemy(enemy) {
    if (enemy.lootToDrop) {
      this.inventory.push(enemy.lootToDrop)
    }
    enemy.updateHP(this.hp *= -1)
  }
}

const enemy = new Enemy(100, "sword of thousand cuts")
const me = new Hero(100)

me.defeatEnemy(enemy)

console.log("me.inventory")
console.log(me.inventory)
console.log("enemy.hp")
console.log(enemy.hp)
console.log("enemy.alive")
console.log(enemy.alive)
