const inquirer = require('inquirer');

const { geolocation } = require('./services');

const chooseTestQuestion = [{
  type: 'list',
  name: 'action',
  message: 'What do you want to test?',
  choices: [
    {
      name: 'Geolocation',
      value: 'geolocation',
    },
    {
      name: 'Quit',
      value: 'quit',
    },
  ],
}];

const runTest = async (answer) => {
  switch (answer) {
    case 'geolocation':
      geolocation();
      break;

    default:
      process.exit();
  }
};

const prompt = () => {
  inquirer
    .prompt(chooseTestQuestion)
    .then((chooseTestAnswer) => {
      const { action } = chooseTestAnswer;
      runTest(action);
    })
    .catch((error) => {
      throw error;
    });
};

module.exports = prompt;
