const inquirer = require("inquirer");
const fs = require("fs");

const carPrompt = [
  {
    type: "input",
    name: "carModel",
    message: "What car model are you looking for?",
  },
  {
    type: "password",
    name: "passwordInput",
    message: "What is your password?",
  },
  {
    type: "checkbox",
    name: "carColor",
    message: "What color car do you prefer?",
    choices: ["red", "yellow", "gray", "blue"],
  },
  {
    type: "list",
    name: "carPrice",
    message: "How much can you spend?",
    choices: ["$5-1000", "$1001-5000", "5001-10000", "10001 on up"],
  },
];

inquirer.prompt(carPrompt).then((response) => {
  const carRequested = `${response.carModel} \n\n has been requested for ${response.carPrice}`;

  fs.writeFile("carfiles/cars_0123123.txt", carRequested, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
});

//response.carPrice
