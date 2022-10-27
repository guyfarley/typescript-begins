class Player {

  constructor(public first: string, public last: string, protected _score: number) { }

  private secretMethod(): void {
    console.log("SECRET METHOD!");
  }

  get fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 99999999;
  }
}

let lassen = new Player("Lassen", "Farley", 100);
lassen.fullName;
lassen.score = 90;

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) { }
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) { }

  print(): void {
    console.log(`${this.color} ${this.brand}`)
  }
}

const bike = new Bike("red");
const jacket = new Jacket("Prada", "black");


abstract class Employee {
  constructor(public first: string, public last: string) { }
  abstract getPay(): number;
  greet() {
    console.log("HELLO!")
  }
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay() {
    return this.salary;
  }
}

class PartTimeEmployee extends Employee {
  constructor(first: string, last: string, private hourlyRate: number, private hoursWorked: number) {
    super(first, last);
  }

  getPay() {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new PartTimeEmployee("Bill", "Billerson", 24, 1100);
console.log(bill.getPay());


// class Player {
//   public readonly first: string;
//   public readonly last: string;
//   private score = 0; // or score: number =0;

//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//     this.secretMethod;
//   }

//   private secretMethod(): void {
//     console.log("SECRET METHOD!");
//   }
// }