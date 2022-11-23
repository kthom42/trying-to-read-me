// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { error } = require("console");
// array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the project title?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Usage details",
  },
  {
    type: "input",
    name: "contributions",
    message: "List contributors",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email",
  },
  {
    type: "input",
    name: "github",
    message: "Enter your github url",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license",
    choices: ["MIT", "ISC", "GNUPLv3"],
  },
];

// function to initialize app
function init() {
  return inquirer
    .prompt(questions)
    .then((data) => {
      const generate = generateMarkdown(data);
      //function to write readme to folder
      fs.writeFile("README.MD", generate, function (error) {
        if (error) {
          console.log("File could not be saveed", Error);
        } else {
          console.log("Success: README generated");
        }
      });
    })

    .catch((error) => {
      console.log(error);
    });
}

// Function call to initialize app
init();
