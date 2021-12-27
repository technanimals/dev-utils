import fs from 'fs';
import path from 'path';
import packageJson from '../package.json';

const ROOT = process.cwd();
const DIST_DIR = path.resolve(ROOT, 'dist');
const SOURCE_DIR = path.resolve(DIST_DIR);
const { peerDependencies } = packageJson;

function fixImport() {
  const files = fs.readdirSync(SOURCE_DIR);
  const keys = Object.keys(peerDependencies) as (keyof typeof peerDependencies)[];
  files.forEach((file) => {
    const filePath = path.resolve(SOURCE_DIR, file);
    const data = fs.readFileSync(filePath).toString();
    let value = data;
    keys.forEach((key) => {
      const pattern = `../node_modules/${key}`;
      const regex = new RegExp(pattern, 'g');
      const isExternal = regex.test(data);
      if (isExternal) {
        value = data.replace(regex, key);
      }
    });

    if (data !== value) {
      console.log({ filePath });
      fs.writeFileSync(filePath, value);
    }
  });
}

fixImport();
