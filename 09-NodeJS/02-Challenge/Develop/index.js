// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const data = [
  {
    type: 'input',
    name: 'name',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: "What is your project about?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the installation instructions for your project?",
  },
  {
    type: 'input', 
    name: 'solution',
    message: 'What does your problem solve?',
  },
  {
    type: 'input',
    name: 'functions',
    message: 'What features does your project have?',
  },
  {
    type: 'input',
    name: 'technologies',
    message: 'What technologies does your project use?',
  },
  {
    type: 'input',
    name: 'benefit',
    message: 'Who can benefit from using your project?',
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'Who are the contributors to your project?',
  },
  {
    type: 'input',
    name: 'license',
    message: 'What license is your project under?',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const fileData = `
${data.name}

## Name

${data.description}

## Description

${data.installation}

## Installation

${data.solution}

## Solution

${data.functions}

## Features

${data.technologies}

## Technologies

${data.benefit}

## Who can benefit

${data.contributions}

## Contributors

${data.license}

## License
`;
fs.writeFile(fileName, fileData, (err) => {
  if (err) throw err;
  console.log('README file written successfully.');
});
 
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(data).then((answers) => {
    writeToFile('README.md', answers);
  });
}


// Function call to initialize app
init();

______________________________________________
/*const fs = require('fs');
const inquirer = require('inquirer');

// Define the questions to ask the user
const questions = [
  {
    type: 'input',
    name: 'name',
    message: "What is your project's name?",
  },
  {
    type: 'input',
    name: 'description',
    message: "What is your project's description?",
  },
  {
    type: 'input',
    name: 'installation',
    message: "What are the installation instructions for your project?",
  },
  // Add more questions as needed
];

// Prompt the user for information
inquirer.prompt(questions).then((answers) => {
  // Generate the content for the README.md file using template literals
  const content = `# ${answers.name}

${answers.description}

## Installation

${answers.installation}

`;

  // Write the content to the README.md file
  fs.writeFile('README.md', content, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README.md file created successfully!');
    }
  });
});*/
