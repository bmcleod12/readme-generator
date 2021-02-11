// name, link, and info for each license type - to be filtered and selected as appropriate
const licenseOptions = [
  {
    licenseName: 'Apache 2.0',
    badgeLink: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    licenseLink: 'https://choosealicense.com/licenses/apache-2.0/'
  },
  {
    licenseName: 'GNU GPLv3',
    badgeLink: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    licenseLink: 'https://choosealicense.com/licenses/gpl-3.0/'
  },
  {
    licenseName: 'GNU LGPLv3',
    badgeLink: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)',
    licenseLink: 'https://choosealicense.com/licenses/agpl-3.0/'
  },
  {
    licenseName: 'MIT',
    badgeLink: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    licenseLink: 'https://choosealicense.com/licenses/mit/'
  },
  {
    licenseName: 'Mozilla Public License 2.0',
    badgeLink: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    licenseLink: 'https://choosealicense.com/licenses/mit/'
  },
  {
    licenseName: 'Unlicense',
    badgeLink: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)',
    licenseLink: 'https://choosealicense.com/licenses/unlicense/'
  }
];

// Returns the license badge link so it's available for the generateMarkdown function
function renderLicenseBadge(license) {
  const currentLicense = licenseOptions.filter(licenseOption => licenseOption.licenseName == license);
  return currentLicense[0].badgeLink;
}

// Returns the license link to more info so it's available for the generateMarkdown function
function renderLicenseLink(license) {
  const currentLicense = licenseOptions.filter(licenseOption => licenseOption.licenseName == license);
  return currentLicense[0].licenseLink;
}

// Generates the markdown code for README; grabs user's answers passed from index.js along the way
function generateMarkdown(answers) {
return `
${renderLicenseBadge(answers.license)}

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

This application uses ${answers.license}.

Please visit ${renderLicenseLink(answers.license)} to learn more.
`;
}

// makes the output from the genrateMarkdown function available to pass back to index.js for the writeToFile function
module.exports = generateMarkdown;


