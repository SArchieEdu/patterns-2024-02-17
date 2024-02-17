const game = {
  level: 12,
  money: 12,
  name: "Artem",
  // ...

  makeSnapshot() {
    return {
      level: this.level,
      money: this.money,
      //...
    };
  },
  restoreFromSnapshot({ level, money, name }) {
    this.level = level;
    this.money = money;
    this.name = name;
  },
};
