class Orc {
  constructor(name, weapon) {
    this.name = name;
    this.weapon = weapon;
    this.health = 125;
  }

  say() {
    console.log(`I am orc ${this.name}`);
  }

  atack() {
    console.log(`${this.name} used ${this.weapon}`);
  }

  defense() {
    console.log(`${this.name} blocked the atack`);
  }

  angry() {

  }
}