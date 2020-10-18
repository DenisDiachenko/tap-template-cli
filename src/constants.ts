import * as fs from 'fs';

const CHOICES = fs.readdirSync(`${__dirname}/templates`);
export const CURRENT_DIRECTORY = process.cwd();

export const QUESTIONS = [
  {
    name: 'template-choice',
    type: 'list',
    message: 'What project template would you like to generate?',
    choices: CHOICES,
  },
  {
    name: 'project-name',
    type: 'input',
    message: 'Enter project name:',
    validate: function(input: string) {
      if (/^([A-Za-z\-\_\d])+$/.test(input)) {
        return true;
      }
      else return 'Project name may only include letters, numbers, underscores and hashes.';
    }
  }
];