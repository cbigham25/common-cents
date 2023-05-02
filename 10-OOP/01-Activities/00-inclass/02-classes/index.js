class Simpsons {
  constructor(firstName) {
    this.firstName = firstName;
    this.lastName = "Simpson";
    this.street = "Evergreen Terrance";
    this.timesSaidHi = 0;
    this.timesSaidHiTo = 0;
  }

  printName() {
    console.log(`Hi name is ${this.firstName}.`);
  }

  changeStreetofOtherSimpson(otherSimpson) {
    otherSimpson.street = "123 Sesame Street";
  }

  sayHiOtherSimpson(anotherSimpson) {
    this.timesSaidHi++;
    anotherSimpson.timesSaidHiTo++;
    console.log(
      `
      ${this.firstName} said hi ${this.timesSaidHi} time(s).
      ${anotherSimpson.firstName} was said hi to ${anotherSimpson.timesSaidHiTo} time(s).
      `
    );
  }
}

const homer = new Simpsons("Homer");
const lisa = new Simpsons("Lisa");
const bart = new Simpsons("Bart");

homer.changeStreetofOtherSimpson(bart);
homer.sayHiOtherSimpson(lisa);
bart.sayHiOtherSimpson(lisa);

console.log(bart.street);
