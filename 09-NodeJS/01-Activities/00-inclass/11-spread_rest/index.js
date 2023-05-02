//Spread

var myName = ["Chris", "Woolcott"];
var countyCountry = ["Hennepin", "USA"];
var newArr = [...myName, "Developer", "Minnesota", ...countyCountry];
// ["Chris" , "Woolcott" , "Developer" , "Minnesota"] ;

var myName = ["Chris", "Woolcott"];
// ["Chris" , "Woolcott" , "Developer" , "Minnesota"]
var newArr = [myName, "Developer", "Minnesota"];

var car = {
  make: "Mazda",
  model: "Rx-7",
  dealer: "Carosaul",
};

var dealerShip = {
  dealer: "Morries",
  location: "Minnetonka",
};

var newObj = {
  ...car,
  ...dealerShip,
};

var student = {
  class: "CS 101",
  name: "Caleb",
  time: "MWTH 6:30",
};

var newStudent = {
  ...student,
  name: "Zane",
};

//Rest

function myData(firstName, state, ...args) {
  console.log(firstName);
  console.log(state);
  console.log(args); // ["Chris","Minnesota","Developer"]
}

myData("Chris", "Minnesota", "Developer", "USA");

const [firstName, ...hobbies] = ["Chris", "Computers", "Mowing", "Grill"];

console.log(firstName);
console.log(hobbies);
