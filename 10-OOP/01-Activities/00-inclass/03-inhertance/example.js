class Grandparent {
  constructor() {
    this.name = "Grandpa";
    this.hobby = "Knit";
    this.car = "Jeep";
  }
  hobbyDisplay() {
    console.log(`${this.name} likes to ${this.hobby}`);
  }
}

class Parent extends Grandparent {
  constructor(firstName) {
    super();
    this.car = "Buick";
    this.age = 55;
    this.name = firstName;
  }
  parentMessage() {
    console.log(`Parent says hello.`);
  }
}

const carrie = new Parent("Carrie");
const bob = new Grandparent();

console.log(carrie);
