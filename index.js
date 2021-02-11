// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user input
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
        choices: [
            'Apache 2.0', 
            'MIT', 
            'GNU GPLv3',
            'GNU LGPLv3',
            'Mozilla Public License 2.0',
            'Unlicense'
        ]
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

// function to write README file
function writeToFile(fileName, readMeContent) {
    fs.writeFile('./output/README.md', readMeContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
  );
}

// initializes app; when it's initialized, inquirer.prompt iterates through each question in the questions array; .then grabs the readMeContent created in generateMarkdown.js, and passes that content to the writeToFile function
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => { 
            const readMeContent = generateMarkdown(answers);
            writeToFile('./output/README.md', readMeContent);
        })
};

// Function call to initialize app
init();
