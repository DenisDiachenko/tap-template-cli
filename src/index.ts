#!/usr/bin/env node

import * as inquirer from 'inquirer';
import * as fs from 'fs';
import * as path from 'path';
import chalk from 'chalk';

import * as template from './utils/template';
import { QUESTIONS, CURRENT_DIRECTORY } from './constants'
import { postProcess } from './utils/postProcess';
import { ICliOptions } from './types/index';


inquirer.prompt(QUESTIONS).then((answers) => {
  const templateChoice = answers['template-choice'];
  const projectName = answers['project-name'];
  const templatePath = path.join(__dirname, 'templates', templateChoice);
  const targetPath = path.join(CURRENT_DIRECTORY, projectName)

  const options: ICliOptions = {
    templateChoice,
    projectName,
    templatePath,
    targetPath,
  }

  if (fs.existsSync(targetPath)) {
    console.log(chalk.red(`Folder ${targetPath} exists. Delete or use another name.`));
    return;
  }

  fs.mkdirSync(targetPath);

  createDirectoryContents(templatePath, projectName);
  postProcess(options)
});


function createDirectoryContents(templatePath: string, newProjectPath: string) {
  const filesToCreate = fs.readdirSync(templatePath);

  filesToCreate.forEach((file) => {
    const originFilePath = `${templatePath}/${file}`;

    const stats = fs.statSync(originFilePath);

    if(stats.isFile()) {
      const originalContents = fs.readFileSync(originFilePath, 'utf8');
      const contents = template.render(originalContents, { projectName: newProjectPath })

      const writePath = `${CURRENT_DIRECTORY}/${newProjectPath}/${file}`;
      fs.writeFileSync(writePath, contents, 'utf8')
    } else if (stats.isDirectory()) {
      fs.mkdirSync(`${CURRENT_DIRECTORY}/${newProjectPath}/${file}`);
      createDirectoryContents(`${templatePath}/${file}`, `${newProjectPath}/${file}`);
    }
  })

}
