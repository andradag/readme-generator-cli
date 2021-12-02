const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "projectTitle",
    message: "Please enter your project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter your project description:",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Please enter your project contribution guidelines:",
  },
  {
    type: "input",
    name: "githubUsername",
    message: "Please enter your GitHub username:",
  },
  {
    type: "input",
    name: "emailAddress",
    message: "Please enter your email address:",
  },
  {
    type: "list",
    name: "license",
    message: "Please select your project license:",
    choices: [
      "MIT License",
      "GNU Lesser General Public License v3.0",
      "Mozilla Public License 2.0",
      "GNU Affero General Public License v3.0",
      "The Unlicense",
      "Apache License 2.0",
      "GNU General Public License v3.0",
    ],
    default: "MIT License",
  },
  {
    type: "confirm",
    name: "installationConfirm",
    message: "Do you have installation steps?",
  },
  {
    type: "input",
    name: "installationSteps",
    message: "Please enter your project installation steps:",
    when: (answers) => {
      return answers.installationConfirm;
    },
  },
  {
    type: "confirm",
    name: "usageConfirm",
    message: "Do you have usage steps?",
  },
  {
    type: "input",
    name: "usageSteps",
    message: "Please enter your project usage steps:",
    when: (answers) => {
      return answers.usageConfirm;
    },
  },
  {
    type: "confirm",
    name: "testConfirm",
    message: "Do you have test steps?",
  },
  {
    type: "input",
    name: "testSteps",
    message: "Please enter your project test steps:",
    when: (answers) => {
      return answers.testConfirm;
    },
  },
];

const start = async () => {
  const answers = await inquirer.prompt(questions);
  console.log(answers);
};

start();
