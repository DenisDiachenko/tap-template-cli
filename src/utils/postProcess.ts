import { cd, exec } from 'shelljs';
import * as path from 'path';
import * as fs from 'fs';

import { ICliOptions } from '../types'

export function postProcess(options: ICliOptions) {
  const isNode = fs.existsSync(path.join(options.templatePath, 'package.json'));
  if (isNode) {
    cd(options.targetPath);
    exec('npm i');
    exec('git init');
  }
}