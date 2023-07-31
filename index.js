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

// Object containing descriptions for each license a user may select
const licenseExplanations = {
    'MIT License': 'A permissive license that allows users to do almost anything with the code as long as they provide attribution back to the author and don’t hold the author liable. This license is widely used for its simplicity and permissiveness.',
    'Apache License 2.0': 'A permissive license that allows users to use, modify, and distribute the licensed software. The Apache License 2.0 also provides explicit protection against patent infringement claims.',
    'GNU GPLv3': 'The latest version of the GPL, which addresses some of the compatibility issues of GPLv2 and provides more protection against software patents.',
    'ISC License': 'The ISC License simply removes language that would be considered extraneous according to the Berne Convention. The ISC License is considered equivalent to the Simplified (2-Clause) BSD License but with more concise language.',
    'None': 'No license has been chosen for this project',
};

// Function to get the URL for the license badge
function getLicenseBadgeURL(license) {
    return `https://img.shields.io/badge/license-${encodeURIComponent(license)}-brightgreen`;
}
// Function to generate the content for the README.md file
async function generateReadme(answers) {
    const licenseBadgeURL = getLicenseBadgeURL(answers.license);
    const licenseExplanation = licenseExplanations[answers.license];

  return `

# ${answers.title}

## License
![License](${licenseBadgeURL})

${licenseExplanation}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#instructions)
- [License](#license)
- [Contributing](#contribution)
- [Tests](#test)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.instructions}

## Contributing
${answers.contribution}

## Tests
${answers.test}

## Questions
For any questions or concerns, please reach out to me through the following contact information:

- Github: [${answers.userName}](https://github.com/${answers.userName})
- Email: ${answers.email}
`;
}