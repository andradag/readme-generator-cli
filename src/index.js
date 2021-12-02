const inquirer = require("inquirer");
const fs = require("fs");

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

const constructReadme = (answers) => {
  return `# ${answers.projectTitle} ![${
    answers.license
  }](https://img.shields.io/static/v1?label=${encodeURI(
    answers.license
  )}&message=License&color=green)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Contributing](#contributing)
- [License](#license)
- [Questions](#questions)

## Description

${answers.description}

## Installation

Run the following script to install the packages required for the application:

\`\`\`
ADD TEXT HERE
\`\`\`

## Usage

To use the application run the following script:

\`\`\`
ADD TEXT HERE
\`\`\`

## Tests

To use the application run the following script:

\`\`\`
ADD TEXT HERE
\`\`\`

## Contributing

${answers.contributionGuidelines}

## License

${answers.license}

## Questions

Please contact me on ${
    answers.emailAddress
  } or visit my GitHub Profile [here](https://github.com/${
    answers.githubUsername
  })`;
};

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const start = async () => {
  const answers = await inquirer.prompt(questions);

  const readme = constructReadme(answers);

  writeToFile("GENERATED_README.md", readme);

  console.log("Successfully generated readme file");
};

start();
