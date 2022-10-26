"use strict";
console.log("IT'S WORKING!");

class Player {
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
}

const player1 = new Player("lassen", "farley");
console.log(player1.taunt());
console.log(player1.first);
console.log(player1.last);
console.log(player1.getScore());

// const player2 = new Player("guy", "farley");
// player2.taunt();
