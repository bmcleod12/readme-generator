// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const badgeMaker = require('badge-maker');
// const generateMarkdown = require('.\utils\generateMarkdown.js');

const generateReadMe = (answers) =>
    `# Project Title

    ${answers.appTitle}

    ## Description

    ${answers.description}

    ## Installation

    ${answers.installation}

    ## Usage

    ${answers.usage}

    ## Contributing

    ${answers.contribution}

    ## Tests

    ${answers.appTest}

    ## Credits

    ${answers.credits}
    
    ## License
    
    ${answers.license}`
    ;

// TODO: Create an array of questions for user input
const questions = [
    {
        type:  'input',
        name: 'appTitle',
        message: 'Provide the Title of your application.',
    },
    {
        type:  'input',
        name: 'description',
        message: 'Provide a Description of your application.',
    },
    {
        type:  'input',
        name: 'installation',
        message: 'Provide installation instructions for your application.',
    },
    {
        type:  'input',
        name: 'usage',
        message: 'Provide instructions for the usage of your application.',
    },
    {
        type:  'input',
        name: 'contribution',
        message: 'Provide instructions on how to contribue to your application, if appropriate.',
    },
    {
        type:  'input',
        name: 'appTest',
        message: 'Provide a few test cases users can run on your application.',
    },
    {
        type:  'input',
        name: 'credits',
        message: 'Provide any links or points of contact to list as Credits on the application.',
    },
    {
        type:  'list',
        name: 'license',
        message: 'Select a license to apply to your application.',
        choices: ['MIT', 'Unlicense']
    },
    {
        type:  'input',
        name: 'gitHubUsername',
        message: 'Please enter your GitHub username.',
    },
    {
        type:  'input',
        name: 'emailAddress',
        message: 'Please enter your email address to be used as a point of contact for questions.',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, readMeContent) {
    fs.writeFile('README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// TODO: Create a function to initialize app
// when it's initialized, inquirer.prompt iterates through each question in the questions array
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => { 
            const readMeContent = generateReadMe(answers);
            console.log(readMeContent);
            writeToFile('README.md', readMeContent);
        })
};

// Function call to initialize app
init();
