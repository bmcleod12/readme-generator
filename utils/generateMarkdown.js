// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
// https://choosealicense.com/licenses/apache-2.0/

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
// https://choosealicense.com/licenses/gpl-3.0/

// [![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
// https://choosealicense.com/licenses/agpl-3.0/

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
// https://choosealicense.com/licenses/mit/

// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
// https://choosealicense.com/licenses/mpl-2.0/

// [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
// https://choosealicense.com/licenses/unlicense/

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
# ${answers.appTitle}

## Description

${answers.description}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

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

## Questions

Questions on the project? Visit my profile here: https://github.com/${answers.gitHubUsername}

Or contact me at ${answers.emailAddress}.

## License

${answers.license}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)} 
`;
}

module.exports = generateMarkdown;
