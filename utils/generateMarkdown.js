// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

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
  ${data.license}
`;
}

module.exports = generateMarkdown;
