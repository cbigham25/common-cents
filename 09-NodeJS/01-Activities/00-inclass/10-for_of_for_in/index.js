const cars = ["BMW", "Ford", "Chevy"];
for (const car of cars) {
  console.log(car);
  if (car === "BMW") {
    cars.push("Mazda");
  }
}

cars.forEach((car) => {
  console.log(car);
  if (car === "BMW") {
    cars.push("Mazda");
  }
});

car = {
  make: "Mazda",
  model: "Rx-7",
  color: "red",
  "extra feature": "headlights",
};

for (const carProperty in car) {
  console.log(`${carProperty} is ${car[carProperty]}`);
}

console.log(car.make);
var someProperty = "color";
console.log(car[someProperty]);
console.log(car["extra feature"]);
