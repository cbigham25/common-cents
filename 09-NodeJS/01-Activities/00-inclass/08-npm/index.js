const randomRickMorty = require("random-rick-and-morty-character-v2");
const inquirer = require("inquirer");
const rickAndMortyCharacter = randomRickandMorty.rickAndMortyCharacter();

console.log(rickAndMortyCharacter);

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your first name?",
      name: "firstName",
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password",
    },
    {
      type: "checkbox",
      message: "Favorite Car Color",
      name: "carColor",
      choices: ["Red", "Blue", "Yellow", "Black"],
    },
    {
      type: "list",
      message: "What is your Price Range?",
      name: "carPriceRange",
      choices: ["$5-1000", "$1001-5000", "5001-10000", "10001 on up"],
    },
  ])
  .then(function (answers) {
    console.log(
      `Hello ${answers.firstName} ${answers.password} ${answers.carColor} ${answers.carPriceRange}!`
    );
  });

console.log(answers.firstName);
