const inquirer = require("inquirer");

const asyncRequest = (obj) =>
  new Promise((resolve, reject) => {
    inquirer
      .prompt(obj)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err);
      });
  });

const questions = {
  type: "input",
  name: "firstName",
  message: "What is your first name",
};

asyncRequest(questions).then((response) => {
  console.log(response);
});
