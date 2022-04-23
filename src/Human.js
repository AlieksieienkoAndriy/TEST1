class Human {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.health = 100;
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
}