// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);
  const badge = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    ISC: "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    GNUGPLv3:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    IBM: "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)",
    SIL: "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)",
  };
  if (license) {
    return badge[license];
  } else {
    return "";
  }
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const links = {
    MIT: "[MIT](https://choosealicense.com/licenses/mit/)",
    ISC: "[ISC](https://choosealicense.com/licenses/isc/)",
    GNUGPLv3: "[GNUGPLv3](https://choosealicense.com/licenses/gpl-3.0/)",
    IBM: "[IBM](https://www.ibm.com/about/software-licensing/licensing/basics)",
    SIL: "[SIL](https://en.wikipedia.org/wiki/SIL_Open_Font_License)",
  };
  if (license) {
    return links[license];
  } else {
    return "";
  }
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `Licensed under the ${renderLicenseLink(license)} license`;
  } else {
    return "";
  }
}

//function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

 ${renderLicenseBadge(data.license)}

  ## Table of contents
  - [Project description](#Description)
  - [Usage](#usage)
  - [Contributions](#Contributions)
  - [Installation](#Installation)
  - [Contact](#Contact)
  - [License](#License)

  ## Description
  ${data.description}

  ## Usage
  ${data.usage}

  ## Installation
  ${data.installation}

  ## Contributions
  ${data.contributions}

  ## Contacts
  ${data.email}
  ${data.github}

  ## License
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
