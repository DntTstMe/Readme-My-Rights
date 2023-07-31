// Importing the 'promises' property from the 'fs' module
// This provides us with asynchronous file system operations
const fs = require('fs').promises;
// Importing the 'inquirer' module
// It prompts the user for input and receive their responses
const inquirer = require('inquirer');

// Array of questions to prompt the user for project information
const questions = [{
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project: (Required)',
    //validate to make sure there is a value there
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your title.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a brief description of your project: (Required)',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter a description.');
        return false;
      }
    }
    },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions.',
  },
  { 
    type: 'input',
    name: 'instructions',
    message: 'Enter usage instructions',   
  },
  {
    type: 'input',
    name: 'contribution',
    message: 'Enter contribution guidelines: ',
  },
  {
    type: 'input',
    name: 'test',
    message: 'Enter test instructions: '
  },
  { 
    type: 'checkbox',
    name: 'license',
    message: 'Please choose a license.',
    choices: ['MIT License',
    'Apache License 2.0',
    'GNU GPLv3',
    'ISC License',
    'None'],
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please select a license.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'userName',
    message: 'Enter your GitHub username: ',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your GitHub username.');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address: ',
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else {
        console.log('Please enter your email.');
        return false;
      }
    }
  }, 
];