// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [
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
        type:  'list',
        name: 'license',
        message: 'Select a license to apply to your application.',
        choices: ['']
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
