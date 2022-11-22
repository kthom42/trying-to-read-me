// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
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
    type: "input",
    name: "license",
    message: "Choose a license",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
