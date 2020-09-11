const inquirer = require('inquirer');

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
    }
  ],
}];

const runTest = async answer => {
  switch (answer) {
    case 'geolocation':
      console.log('geolocation service');
      break;

    default:
      process.exit();
  }
};

const prompt = () => {
  inquirer
    .prompt(chooseTestQuestion)
    .then(chooseTestAnswer => {
      const { action } = chooseTestAnswer;
      runTest(action);
    })
    .catch(error => {
      throw error;
    });
};

module.exports = prompt;
