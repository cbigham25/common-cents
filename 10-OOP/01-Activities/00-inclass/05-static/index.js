class Animal {
    constructor(sound) {

        this.name = "No Name";
        this.legs = "4";
        this.tail = true;
        this.noise = sound;
        this.tailString = this.tail ? "a tail" : "no tail";
    }

    static animalsIntheShelter() {
        console.log("40 animals in shelter")
    }

    displayAnimalInfo() {
        console.log(
            `${this.name} says ${this.noise}, he/she also has ${this.legs} legs and ${this.tailString}.`
        );
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        //const sound = "MEOW!" + " ";
        super(sound);
        this.name = "Cat Named: " + name;
    }
    purr() {
        console.log("PURRR!");
    }
};

class Tabby extends Cat {
    constructor(name, sound) {
        //const sound = "MEOW!" + " ";
        super(name, sound);
    }
    minipurr() {
        console.log("MINI PURRR!");
    }
}
class Fish extends Animal {
    constructor(name) {
        super("BLUB!");
        this.name = "A fish called " + name;
        this.legs = "0";
    }
}


// const tabatha = new Tabby("Tabatha", "mini meow");
// tabatha.minipurr();

Animal.animalsIntheShelter();

const norm = new Fish("Norm");
norm.animalsIntheShelter(); //NO

const mrpant = new Cat("Mr. Pants", "Meowww")

mrpant.purr();
mrpant.displayAnimalInfo();
