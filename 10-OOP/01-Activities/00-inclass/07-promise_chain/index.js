const inquirer = require("inquirer");

inquirer
  .prompt({
    type: "input",
    name: "firstName",
    message: "What is your first name",
  })
  .then((response) => response)
  .then((finalReponse) => {
    console.log(finalReponse);
  })
  .catch((err) => {
    console.log(err);
  });
