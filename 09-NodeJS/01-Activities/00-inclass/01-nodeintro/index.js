// var fName = "Chris";
// console.log("HELLO FROM THE TERMINAL " + fName + "!");

var sayHi = function () {
  console.log("HELLO THERE!");
};

var sayHi2 = () => {
  console.log("HELLO THERE! 2");
};

var sayHi3 = () => console.log("HELLO THERE! 3");

var greeting = function (firstName) {
  return "Hello " + firstName;
};

// Simple Return
var greeting2 = (firstName) => "Hello " + firstName;

// console.log(greeting2("Zane"));

var employee = {
  firstName: "Caleb",
  intro: function () {
    console.log(this.firstName);
  },
};

console.log(employee.intro());
