import { cd, exec, which } from 'shelljs';
import * as path from 'path';
import * as fs from 'fs';

import chalk from 'chalk';

import { ICliOptions } from '../types'

function postProcessNode(options: ICliOptions) {

  let installationScript = which('yarn') ? 'yarn' : which('npm') ? 'npm i' : null;

  if (installationScript) {
    cd(options.targetPath);

    console.log(chalk.bgCyan(`Installing modules by ${installationScript} ...`))
    exec(installationScript);
    console.log('');
    exec('git init');
  } else {
    console.log(chalk.red('No yarn or npm found. Cannot run installation.'));
  }
}

export function postProcess(options: ICliOptions) {
  const isNode = fs.existsSync(path.join(options.templatePath, 'package.json'));
  if (isNode) {
    postProcessNode(options);
  }
}