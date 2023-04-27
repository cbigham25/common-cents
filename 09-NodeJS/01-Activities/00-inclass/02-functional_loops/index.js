const menu = [
  { item: "coffee", calories: 10 },
  { item: "fries", calories: 400 },
  { item: "cheeseburger", calories: 700 },
];

//Mapping
function pullItem(individalItem) {
  return individalItem.item + " Has " + individalItem.calories + " Calories";
}

const menuItems = menu.map(pullItem);

const menuItems2 = menu.map((menuItem) => menuItem.item);
//console.log(menuItems);

//ForEach
for (let i = 0; i < menu.length; i++) {
  //  console.log(menu[i].item + " Has " + menu[i].calories + " Calories");
}

// menu.forEach(function (menuItem, i) {
//   console.log("Index:" + i);
//   console.log(menuItem.item + " Has " + menuItem.calories + " Calories");
// });

//Filter
const soda = ["Pepsi", "Coke", "S&C Dr.Pepper", "Jolt"];

function pullSoda(eachSoda) {
  if (eachSoda === "Pepsi" || eachSoda === "S&C Dr.Pepper") {
    return true;
  }
}

//const betterSoda = soda.filter((eachSoda) => eachSoda.startsWith("C"));
//const betterSoda2 = soda.filter(pullSoda);
//console.log(betterSoda2);

const lowCal = menu.filter((menuItem) => menuItem.calories < 700);
console.log(lowCal);
