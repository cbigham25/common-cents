function Cars(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.sold = false;
}

const carMazda = new Cars("Mazda", "Rx-7", "1995");
console.log(carMazda.make, carMazda.sold);

function carFactory(make, model, year) {
  return {
    make,
    model,
    year,
    sold: false,
    honk: function () {
      console.log("Beep Beep");
    },
  };
}

const carMazda2 = carFactory("Mazda", "Rx-7", "1995");
console.log(carMazda2.make, carMazda2.sold);
carMazda2.honk();
