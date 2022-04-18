class Human {
  constructor(name, weapon, health) {
    this.name = name;
    this.weapon = weapon;
    this.health = health;
  }

  say() {
    console.log(`I am human ${this.name}`);
  }

  atack() {
    console.log(`${this.name} used ${this.weapon}`);
  }

  defense() {
    console.log(`${this.name} blocked the atack`);
  }

  treat(value) {
    this.health += value;
  }
}