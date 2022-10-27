"use strict";
console.log("IT'S WORKING!");

class Player {
  // static methods or properties only exist on the class itself, not instances of this class
  static description = "Player In Our Game";
  // private - cannot access directly from outside the class
  #score = 0;
  numLives = 10;

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }

  taunt() {
    console.log("BOOYAH");
  }

  loseLife() {
    this.numLives -= 1;
  }

  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive!");
    }
    this.#score = newScore;
  }
}

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer("admin", "McAdmin", ["delete", "restore"]);

// const player1 = new Player("lassen", "farley");
// console.log(player1.taunt());
// console.log(player1.first);
// console.log(player1.last);
// console.log(player1.getScore());

// const player2 = new Player("guy", "farley");
// player2.taunt();
