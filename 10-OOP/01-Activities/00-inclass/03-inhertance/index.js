class Animal {
  constructor(sound) {
    this.name = "No Name";
    this.legs = 4;
    this.tail = true;
    this.noise = sound;
    this.tailString = this.tail ? "a tail" : "has no tail";
  }
  displayAnimalInfo() {
    console.log(
      `${this.name} says ${this.noise}, he/she also has ${this.legs} legs and ${this.tailString}.`
    );
  }
}

class Cat extends Animal {
  constructor(name, sound) {
    super();
    this.noise = sound;
    this.name = "Cat Named: " + name;
  }
  purr() {
    console.log("PURR!!");
  }
}

class Fish extends Animal {
  constructor(name) {
    super("Blop");
    this.noise = "Blub";
    this.name = "A fish called" + name;
    this.legs = 0;
  }
}

const tabatha = new Cat("Tabby", "Hiss!");
//tabatha.displayAnimalInfo();

const shinySides = new Fish("Shiny Sides");
shinySides.displayAnimalInfo();
