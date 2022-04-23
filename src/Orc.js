class Orc {
  constructor(name) {
    this.name = name;
    this.weapon = 'axe';
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